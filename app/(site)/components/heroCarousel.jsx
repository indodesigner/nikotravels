"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LottieArrow from "/public/lottie/down-arrow.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "/contexts/languageContext";
import IndiaFlagIcon from "/public/images/india-flag-icon.svg";
import JapanFlagIcon from "/public/images/japan-flag-icon.svg";
import FadeUp from "@/components/animations/fadeUp";
import { useLenis } from "lenis/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroCarousel = ({ slides }) => {
  const path = usePathname();
  const { language } = useLanguage();

  const lenis = useLenis(); // Access Lenis instance for smooth scrolling

  const links = [
    { href: "india", name: "India", namejp: "インド", icon: "IndiaFlagIcon" },
    { href: "japan", name: "Japan", namejp: "日本", icon: "JapanFlagIcon" },
  ];

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element && lenis) {
      lenis.scrollTo(element, { duration: 1.5 }); // Smooth scroll to the target element
    }
  };

  return (
    <section className="p-4 md:px-8 md:py-4 lg:pt-[86px] lg:mb-8 lg:px-16">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper rounded-xl md:rounded-3xl shadow-xl"
        // navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative bg-neutral-900">
              <Image
                src={slide.slideImage}
                width={1000}
                height={500}
                alt={slide.alt}
                className="w-full lg:h-[80svh] object-cover rounded-xl md:rounded-3xl"
                loading="lazy"
              />
              <div className="absolute group flex flex-col justify-center items-center bottom-0 py-10 min-w-[100%] min-h-[100%] bg-neutral-900 bg-opacity-60 hover:bg-opacity-70 text-white px-3 transition duration-300">
                <FadeUp delay="0.3">
                  <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold drop-shadow-md gradient-text py-3 mb-2">
                    {language === "english" ? slide.title : slide.titlejp}
                  </h1>
                </FadeUp>
                <FadeUp delay="0.4" className="flex justify-center">
                  <p className="mb-4 text-xs sm:text-sm md:text-md lg:text-lg font-light w-[100%] sm:max-w-[80%] md:max-w-[60%] md:block hidden">
                    {language === "english" ? slide.caption : slide.captionjp}
                  </p>
                </FadeUp>

                <FadeUp delay="0.5">
                  {/* <div> */}
                  <div className="grid grid-cols-2 gap-3">
                    {path == "/"
                      ? links.map((link) => (
                          <Link
                            key={link.href}
                            href={`/${link.href}`}
                            className="flex flex-col items-center py-2 px-4 sm:px-8 bg-neutral-300 border-2 border-neutral-100 border-opacity-10 bg-opacity-20 backdrop-blur-xl rounded-xl shadow-md hover:shadow-neutral-900 hover:-translate-y-1 transition"
                          >
                            {link.icon === "IndiaFlagIcon" ? (
                              <Image
                                src={IndiaFlagIcon}
                                width={48}
                                height={48}
                                className="w-8 sm:w-12 md:w-16 h-auto"
                                alt="Indian flag button icon"
                              />
                            ) : (
                              <Image
                                src={JapanFlagIcon}
                                width={48}
                                height={48}
                                className="w-8 sm:w-12 md:w-16 h-auto"
                                alt="Japanese flag button icon"
                              />
                            )}
                            <span className="text-sm font-light sm:text-xl">
                              {language === "english" ? link.name : link.namejp}
                            </span>
                          </Link>
                        ))
                      : null}
                  </div>
                  {/* </div> */}
                </FadeUp>

                <FadeUp delay="0.6">
                  <button
                    className="lg:block hidden"
                    onClick={() => scrollToSection("#packages")}
                    aria-label="go to packages section"
                  >
                    <Player
                      autoplay
                      loop
                      src={LottieArrow}
                      style={{ height: "64px", width: "64px" }}
                    ></Player>
                  </button>
                </FadeUp>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
