import Link from "next/link";
import Image from "next/image";
// import { getPackages } from "/sanity/sanity-utils";
import urlFor from "/utils/urlFor";
import { LuImageOff, LuCalendarClock } from "react-icons/lu";
import GetCountry from "@/components/getCountry";

const RelatedPackages = ({ relatedPacks, heading, headingjp, language }) => {
  return (
    <>
      <h4 className="text-lg sm:text-xl font-bold my-4 text-red-500">
        {language == "english" ? heading : headingjp}
        <span className="text-neutral-900 dark:text-neutral-50 ms-2 font-light">
          {language == "english" ? "Packages" : "パッケージ"}
        </span>
      </h4>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
        {relatedPacks &&
          relatedPacks.map((tourPackage) => (
            <Link
              key={tourPackage._id}
              href={`/packages/${tourPackage.slug}`}
              className="group card card-hover p-2"
            >
              {tourPackage.packageImages ? (
                <Image
                  src={urlFor(tourPackage.packageImages).url()}
                  width={800}
                  height={500}
                  alt={tourPackage.alt}
                  className="object-cover h-36 md:h-36 rounded-md"
                ></Image>
              ) : (
                // else part for no place image
                <div className="grid place-items-center border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md">
                  <div>
                    <LuImageOff className="w-16 h-32 md:h-32 text-neutral-300 dark:text-neutral-500" />
                  </div>
                </div>
              )}

              <h5 className="px-2 text-sm sm:text-md md:text-lg font-semibold mt-2 mb-1 line-clamp-3 group-hover:gradient-text transition duration-200">
                {(language === "english"
                  ? tourPackage.packageName
                  : tourPackage.packageNamejp) || tourPackage.packageName}
              </h5>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between px-2 mb-3">
                {tourPackage.duration != null ? (
                  <div className="flex flex-row place-items-center">
                    <LuCalendarClock className="text-sm" />

                    <h6 className="text-xs ps-2">
                      <strong>{tourPackage.duration.days}</strong> Days &{" "}
                      <strong>{tourPackage.duration.nights}</strong> Nights
                    </h6>
                  </div>
                ) : null}

                {tourPackage.rate && (
                  <div className="hidden sm:block border-r border-neutral-300 dark:border-neutral-600"></div>
                )}

                {tourPackage.rate != null ? (
                  <h6 className="text-xs">
                    Starting from <strong>₹{tourPackage.rate}</strong>
                  </h6>
                ) : null}
              </div>

              <div className="px-2 flex flex-wrap gap-1 mb-2">
                {tourPackage.place &&
                  tourPackage.place.map((item, index) => (
                    <span
                      className="bg-black dark:bg-neutral-300 px-3 py-1 rounded-2xl"
                      key={index}
                    >
                      <h6 className="text-xs font-medium text-white dark:text-neutral-900">
                        {language === "english"
                          ? item.placeName.toUpperCase()
                          : item.placeNamejp || item.placeName.toUpperCase()}
                      </h6>
                    </span>
                  ))}
              </div>

              <div className="px-2 flex flex-wrap gap-1 mb-2">
                {tourPackage.placeTypes &&
                  tourPackage.placeTypes.map((item, index) => (
                    <span
                      className="bg-red-500 dark:bg-red-400 px-3 py-1 rounded-2xl"
                      key={index}
                    >
                      <h6 className="text-xs font-medium text-white dark:text-neutral-50">
                        {language === "english"
                          ? item.placeTypeName.toUpperCase()
                          : item.placeTypeNamejp ||
                            item.placeTypeName.toUpperCase()}
                      </h6>
                    </span>
                  ))}
              </div>
            </Link>
          ))}
      </div>

      <GetCountry country={null} />
    </>
  );
};

export default RelatedPackages;
