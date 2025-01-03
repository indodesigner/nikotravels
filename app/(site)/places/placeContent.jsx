"use client";
import React from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { BsImageAlt, BsChevronRight } from "react-icons/bs";
import CommonCarousel from "@/components/commonCarousel";
import { useLanguage } from "/contexts/languageContext";
import RelatedPackages from "@/components/relatedPackages";
import BackButton from "@/components/backButton";
import FadeUp from "@/components/animations/fadeUp";

const PlaceContent = ({ place, slides, country, relatedPacks }) => {
  const { language } = useLanguage();

  return (
    <>
      <FadeUp>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Link href="/places" className="gradient-text">
              {language === "english" ? "Destinations" : "目的地"}
            </Link>
            <h6 className="text-sm">
              <BsChevronRight className="pt-[2px]" />
            </h6>
            <Link
              href={`/${country}`}
              className=" text-neutral-500 dark:text-neutral-400"
            >
              {language === "english" ? place.country : place.countryjp}
            </Link>
          </div>
          <BackButton language={language} />
        </div>
      </FadeUp>

      <FadeUp delay="0.2">
        {slides && slides.length > 0 ? (
          <CommonCarousel slides={slides} />
        ) : (
          <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
            <div className="flex justify-center my-8">
              <BsImageAlt className="w-16 h-16 text-neutral-300 dark:text-neutral-500" />
            </div>
          </div>
        )}
      </FadeUp>

      <FadeUp delay="0.3">
        <div className="bg-neutral-100 dark:bg-neutral-700 bg-opacity-30 dark:bg-opacity-30 dark:border-[1px] dark:border-neutral-400 dark:border-opacity-20 shadow-lg rounded-2xl my-3 p-2">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 px-2">
            {language === "english"
              ? place.placeName
              : place.placeNamejp || place.placeName}
          </h3>
          <hr className="border-neutral-300 dark:border-neutral-700 border-opacity-50 dark:border-opacity-70" />

          <div className="flex items-center px-2 pt-2">
            <h4 className="text-xs ">ATTRACTIONS</h4>
            <h6 className="text-sm">
              <BsChevronRight className="pb-[2px]" />
            </h6>
            <div className="p-2 flex flex-wrap gap-2">
              {place.placeTypes &&
                place.placeTypes.map((item) => (
                  <Link
                    href={`/placeTypes/${item.slug}`}
                    key={item._id}
                    className="group border-2 border-red-500 dark:border-neutral-200 hover:bg-red-100 dark:hover:bg-neutral-700 px-3 rounded-3xl transition"
                  >
                    <h6 className="text-xs font-medium text-red-500 dark:text-white ps-2">
                      {language === "english"
                        ? item.placeTypeName.toUpperCase()
                        : item.placeTypeNamejp ||
                          item.placeTypeName.toUpperCase()}
                    </h6>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay="0.2">
        <div className="mb-4 px-3 sm:px-0 mt-2">
          <PortableText
            value={
              language === "english"
                ? place.content
                : place.contentjp || place.content
            }
            components={RichTextComponents}
          />
        </div>
      </FadeUp>
      <hr className="border-neutral-300 dark:border-neutral-800 mt-16" />

      <FadeUp delay="0.2">
        <RelatedPackages
          relatedPacks={relatedPacks}
          heading={place.placeName}
          headingjp={place.placeNamejp}
          language={language}
        />
      </FadeUp>
    </>
  );
};

export default PlaceContent;
