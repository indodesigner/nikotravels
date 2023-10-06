import ContactForm from "@/components/contactForm";
import GetCountry from "@/components/getCountry";
import { getPackages } from "/sanity/sanity-utils";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export const metadata = {
  title: "Contact page metadata",
  description: "Generated by create next app",
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

  return (
    <div className="container mt-0 md:mt-24">
      <h3 className="text-3xl my-4">Contact us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <p className="mb-4">
            Niko Travels, Hikari Bldg. - Niko Hotels 4th Floor, K.P. Vallon
            Road, Cochin-20 Kerala, India
          </p>
          <a
            href="tel:+917902867672"
            className="flex items-center text-xl font-semibold gap-1"
          >
            <FaPhone />
            +91 7902867672
          </a>
          <a
            href="https://wa.me/919207806444"
            target="_blank"
            className="flex items-center text-xl font-semibold gap-1"
          >
            <FaWhatsapp />
            +91 9207806444
          </a>
        </div>

        <div className="flex justify-center">
          <ContactForm
            indianPackDetails={indianPackDetails}
            japanesePackDetails={japanesePackDetails}
          />
        </div>
      </div>
      <GetCountry country={null} />
    </div>
  );
};

export default ContactPage;
