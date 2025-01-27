"use client";
import Image from "next/image";
import PackagesTabContent from "@/_sections/packages/packagesTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "/contexts/languageContext";
import IndiaFlagIcon from "/public/images/india-flag-icon.svg";
import JapanFlagIcon from "/public/images/japan-flag-icon.svg";
import DestinationCategories from "@/components/destinationCategories";
import FadeUp from "@/components/animations/fadeUp";
import GetInTouch from "@/components/getInTouch";

const PackagesTabs = ({
  indianPacks,
  japanesePacks,
  trendingIndia,
  trendingJapan,
  businessIndia,
  businessJapan,
  placeTypes,
}) => {
  const { language } = useLanguage();

  return (
    <>
      <FadeUp delay="0.3">
        <h2 className="text-3xl font-extrabold my-4">
          {language === "english" ? "Packages" : "パッケージ"}
        </h2>
      </FadeUp>
      <section className="mb-4">
        <FadeUp delay="0.4">
          <Tabs defaultValue="india">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="india">
                <Image
                  src={IndiaFlagIcon}
                  width={20}
                  height={20}
                  className="me-1"
                  alt="Indian flag button icon"
                ></Image>
                {language === "english" ? "India" : "インド"}
              </TabsTrigger>
              <TabsTrigger value="japan">
                <Image
                  src={JapanFlagIcon}
                  width={20}
                  height={20}
                  className="me-1"
                  alt="Japanese flag button icon"
                ></Image>
                {language === "english" ? "Japan" : "日本"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="india" className="flex flex-col gap-2">
              {trendingIndia != 0 ? (
                <PackagesTabContent
                  packages={trendingIndia}
                  heading={language === "english" ? "Trending" : "トレンド"}
                  language={language}
                  country={"india"}
                />
              ) : null}
              {businessIndia != 0 ? (
                <PackagesTabContent
                  packages={businessIndia}
                  heading={language === "english" ? "Business" : "仕事"}
                  language={language}
                  country={"india"}
                />
              ) : null}
              {indianPacks != 0 ? (
                <PackagesTabContent
                  packages={indianPacks}
                  heading={language === "english" ? "All" : "全て"}
                  language={language}
                  country={"india"}
                />
              ) : null}
            </TabsContent>
            <TabsContent value="japan" className="flex flex-col gap-2">
              {trendingJapan != 0 ? (
                <PackagesTabContent
                  packages={trendingJapan}
                  heading={language === "english" ? "Trending" : "トレンド"}
                  language={language}
                  country={"japan"}
                />
              ) : null}
              {businessJapan != 0 ? (
                <PackagesTabContent
                  packages={businessJapan}
                  heading={language === "english" ? "Business" : "仕事"}
                  language={language}
                  country={"japan"}
                />
              ) : null}
              {japanesePacks != 0 ? (
                <PackagesTabContent
                  packages={japanesePacks}
                  heading={language === "english" ? "All" : "全て"}
                  language={language}
                  country={"japan"}
                />
              ) : (
                <div className="text-center">
                  <h1 className="mt-8">Coming soon...</h1>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </FadeUp>
      </section>
      <section>
        <FadeUp delay="0.3">
          <DestinationCategories placeTypes={placeTypes} language={language} />
        </FadeUp>
      </section>
      <section className="mt-8">
        <FadeUp delay="0.3">
          <GetInTouch language={language} />
        </FadeUp>
      </section>
    </>
  );
};

export default PackagesTabs;
