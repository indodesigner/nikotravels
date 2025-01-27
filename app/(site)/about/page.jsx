"use client";
import GetInTouch from "@/components/getInTouch";
import FadeUp from "@/components/animations/fadeUp";
import { useLanguage } from "/contexts/languageContext";

const AboutPage = () => {
  const { language } = useLanguage();
  return (
    <div className="container mt-0 sm:mt-8 lg:mt-16">
      <FadeUp delay="0.3">
        <h2 className="text-3xl font-extrabold my-4">About us</h2>
        <p>
          Discover the world with Niko Travels, where we craft extraordinary
          travel adventures across Kerala, India, and beyond. Our mission is to
          turn your travel aspirations into cherished memories, whether you seek
          the tranquility of Kerala's landscapes or the vibrant cultural
          tapestry of Japan.
        </p>
      </FadeUp>

      <FadeUp delay="0.4">
        <div className="gradient-bg-light p-6 my-8 rounded-2xl">
          <h3 className="font-bold text-2xl mb-2">What Sets Us Apart</h3>
          <h5 className="font-semibold text-lg">
            Kerala, India: A Tapestry of Experiences
          </h5>
          <p>
            Explore the diverse wonders of Kerala through our meticulously
            designed travel packages. From the tranquil backwaters to the
            mist-covered hills, we curate experiences that immerse you in the
            rich culture and natural beauty of this enchanting region.
          </p>
          <h5 className="font-semibold text-lg">Japan: Beyond Business</h5>
          <p>
            While we excel in creating seamless business packages for
            professionals in Japan, our offerings extend far beyond boardrooms.
            Dive into the dynamic blend of tradition and modernity with our
            leisure-focused itineraries, ensuring you experience the soul of
            Japan in every moment.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay="0.5">
        <h3 className="font-bold text-2xl mb-2 mt-4">Our Commitment</h3>
        <ul className="list-disc ps-5">
          <li>
            <strong>Tailored Experiences:</strong> Your journey is as unique as
            you are. At Niko Travels, we tailor each itinerary to your
            preferences, ensuring a travel experience that resonates with your
            individual tastes and interests.
          </li>
          <li>
            <strong>Exceptional Quality:</strong> From accommodation choices to
            local guides, we uphold the highest standards to guarantee your
            satisfaction. Our commitment to excellence is unwavering, ensuring
            you enjoy every moment of your adventure.
          </li>
          <li>
            <strong>Sustainable Travel:</strong>We believe in responsible travel
            that respects the environment and local communities. Our initiatives
            focus on leaving a positive impact on the destinations we visit,
            contributing to their preservation for future generations.
          </li>
        </ul>
      </FadeUp>

      <div className="mt-8">
        <FadeUp delay="0.3">
          <GetInTouch language={language} />
        </FadeUp>
      </div>
    </div>
  );
};

export default AboutPage;
