"use client";
import Image from "next/image";
import Link from "next/link";
import BlogSection from "@/components/blogs";
import PlacesSection from "@/components/destinations/places";
import PackagesSection from "@/components/packages/packages";
import { motion } from "framer-motion";
import { useLanguage } from "/contexts/languageContext";
import GetInTouch from "@/components/getInTouch";

export default function CommonSections({
  placeTypes,
  packages,
  firstSectionPackages,
  secondSectionPackages,
  businessPackages,
  places,
}) {
  const { language } = useLanguage();
  const headings = ["Trending", "Popular", "Business", "All"];
  const headingsJp = ["インド", "日本", "仕事", "全て"];

  return (
    <div>
      {firstSectionPackages != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
            id="packages"
          >
            <PackagesSection
              packages={firstSectionPackages}
              heading={language === "english" ? headings[0] : headingsJp[0]}
              language={language}
            />
          </motion.section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {placeTypes != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
            id="packages"
          >
            <div className="bg-red-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 shadow-lg backdrop-blur-lg dark:backdrop-blur-lg rounded-xl">
              <h4 className="text-neutral-800 dark:text-neutral-50 text-xl sm:text-2xl font-bold py-4 text-center">
                Destination Categories
              </h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 p-4 place-items-center">
                {placeTypes &&
                  placeTypes.map((item) => (
                    <Link
                      key={item._id}
                      href={`placeTypes/${item.slug}`}
                      className="bg-red-400 dark:bg-neutral-600 dark:bg-opacity-10 dark:backdrop-blur-md p-2 ps-4 w-full flex items-center gap-2 rounded-xl hover:-translate-y-1 hover:shadow-md transition"
                    >
                      {item.placeTypeIcon ? (
                        <Image
                          src={item.placeTypeIcon}
                          width={100}
                          height={100}
                          alt={item.placeTypeIcon.alt}
                          className="w-auto h-16"
                        ></Image>
                      ) : null}

                      <h5 className="text-white font-bold">
                        {language === "english"
                          ? item.placeTypeName
                          : item.placeTypeNamejp || item.placeTypeName}
                      </h5>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {secondSectionPackages != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
          >
            <PackagesSection
              packages={secondSectionPackages}
              heading={language === "english" ? headings[1] : headingsJp[1]}
              language={language}
            />
          </motion.section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {businessPackages != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
          >
            <PackagesSection
              packages={businessPackages}
              heading={language === "english" ? headings[2] : headingsJp[2]}
              language={language}
            />
          </motion.section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      {packages != 0 ? (
        <>
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
            className="container"
          >
            <PackagesSection
              packages={packages}
              heading={language === "english" ? headings[3] : headingsJp[3]}
              language={language}
            />
          </motion.section>
          {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
        </>
      ) : null}

      <section className="container">
        <GetInTouch />
        {/* <hr className="container border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-50 mt-8" /> */}
      </section>

      {places != 0 ? (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.5 }}
          className="container"
        >
          <PlacesSection places={places} language={language} />
        </motion.section>
      ) : null}

      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.5 }}
        className="container"
      >
        <BlogSection language={language} />
      </motion.section>
    </div>
  );
}
