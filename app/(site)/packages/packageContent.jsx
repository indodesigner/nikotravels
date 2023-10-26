"use client";
import React from "react";
import { RichTextComponents } from "/utils/RichTextComponents";
import Link from "next/link";
// import { format } from "date-fns";
// import { parseISO } from "date-fns";
import { PortableText } from "@portabletext/react";
// import urlFor from "/components/urlFor";
import { BsChevronRight } from "react-icons/bs";
import CommonCarousel from "@/components/commonCarousel";
import { useLanguage } from "/contexts/languageContext";

const packageContent = ({ tourPackage, slides, country }) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="flex items-center mb-3">
        <Link href="/packages" className="gradient-text">
          {language === "english" ? "Packages" : "パッケージ"}
        </Link>
        <h6 className="text-sm">
          <BsChevronRight className="pt-[2px]" />
        </h6>
        <Link
          href={`/${country}`}
          className=" text-neutral-500 dark:text-neutral-400"
        >
          {tourPackage.country}
        </Link>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        {language === "english"
          ? tourPackage.packageName
          : tourPackage.packageNamejp != null
          ? tourPackage.packageNamejp
          : tourPackage.packageName}
      </h3>

      <CommonCarousel slides={slides} />

      <div className="px-2 flex flex-wrap gap-2 my-6">
        {tourPackage.place &&
          tourPackage.place.map((item) => (
            <Link
              href={`/places/${item.slug}`}
              className="group border-2 border-red-600 dark:border-red-500 hover:bg-red-600 dark:hover:bg-red-900 p-1 px-5 rounded-3xl transition"
            >
              <h6 className="text-xs sm:text-sm font-medium group-hover:text-white">
                {language === "english"
                  ? item.placeName.toUpperCase()
                  : item.placeNamejp != null
                  ? item.placeNamejp
                  : item.placeName.toUpperCase()}
              </h6>
            </Link>
          ))}
      </div>

      {/* <div className="my-5 px-4 py-5 bg-white dark:bg-neutral-900 shadow-lg shadow-neutral-200 dark:shadow-neutral-900 rounded-md">
        <div className="flex flex-row justify-between">
          {duration == 0 ? (
            <h6>Duration depends on your schedule</h6>
          ) : (
            <h4 className="font-bold text-lg mb-4">{duration} Days</h4>
          )}

          {tourPackage.rate ? (
            <h4 className="font-bold text-lg mb-4">₹{tourPackage.rate}</h4>
          ) : (
            <h6>Package rate depends on the schedule</h6>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Departure</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.departureDate ? (
                format(parseISO(tourPackage.departureDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
          <div className="flex flex-row place-items-center">
            <h5 className="min-w-[80px] sm:min-w-fit font-light">Return</h5>
            <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 ms-2 rounded-lg font-medium">
              {tourPackage.returnDate ? (
                format(parseISO(tourPackage.returnDate), "dd MMMM yyyy")
              ) : (
                <h6>You Pick</h6>
              )}
            </span>
          </div>
        </div>
      </div> */}

      <div className="mb-8 px-4">
        <PortableText
          value={
            language === "english"
              ? tourPackage.content
              : tourPackage.contentjp != null
              ? tourPackage.contentjp
              : tourPackage.content
          }
          components={RichTextComponents}
        />
      </div>
    </>
  );
};

export default packageContent;