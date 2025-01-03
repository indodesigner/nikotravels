import GetCountry from "@/components/getCountry";
import { getPackages } from "/sanity/sanity-utils";
import ContactContent from "./contactContent";
import Advertisement from "@/components/advertisement";
import FadeUp from "@/components/animations/fadeUp";

export const metadata = {
  title:
    "Contact Us - Reach Out for Tailored Journeys to the Best of Japan and India | Niko Travels",
  description:
    "Connect with us at Niko Travels to plan your dream journey to the finest destinations in Japan and India. Our dedicated team is here to assist you with personalized tour packages, insider tips, and expert guidance. Let's shape your travel aspirations into reality. Reach out today and embark on a seamless adventure with Niko Travels",
};

const ContactPage = async () => {
  const packages = await getPackages(); //fetch places from sanity query can be fount in (sanity/sanity-utils.js)
  const indianPacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("India");
  });
  const japanesePacks = packages.filter((pack) => {
    return pack.country && pack.country.includes("Japan");
  });
  const indianPackDetails = indianPacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));
  const japanesePackDetails = japanesePacks.map((item) => ({
    name: item.packageName,
    slug: item.slug,
  }));

  const gCaptchaSiteKey = process.env.GOOGLE_RECAPTCHA_SITE_KEY;
  // const gCaptchaSecretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  return (
    <>
      <ContactContent
        indianPackDetails={indianPackDetails}
        japanesePackDetails={japanesePackDetails}
        gCaptchaSiteKey={gCaptchaSiteKey}
      />
      <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70 mt-2" />

      <div className="container">
        <FadeUp delay="0.3">
          <Advertisement />
        </FadeUp>
      </div>

      <GetCountry country={null} />
    </>
  );
};

export default ContactPage;
