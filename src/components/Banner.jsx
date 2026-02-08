import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1747301990.jpg",
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1747302096.jpg",
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1768109585.jpeg",
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1768109660.jpeg",
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1768109717.jpeg",
  "https://ssl.du.ac.bd/fontView/assets/rsearch_center_image/slider/COG-1768976873.jpeg",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Track window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Device detection
  const isDesktop = windowWidth >= 1024;
  const isTabletOrMobile = windowWidth < 1024;

  const getCardsToShow = isDesktop ? 5 : 1;
  const getCardOffset = (position) => (isDesktop ? 25 + position * 60 : 0);
  const getCardScale = (position) => (isDesktop ? 1 - position * 0.06 : 1);

  // Banner height based on device
  const bannerHeight = isDesktop
    ? "75vh"
    : windowWidth >= 768
    ? "55vh"
    : "50vh";

  return (
    <>
      {/* Carousel Container */}
      <div className="relative w-full bg-slate-200 overflow-hidden pt-8 pb-8">
        <div
          className="relative w-[95%] mx-auto"
          style={{ height: bannerHeight }}
        >
          {/* Slides */}
          {images.map((img, index) => {
            if (isTabletOrMobile && index !== currentIndex) return null;

            const position = isDesktop
              ? (index - currentIndex + images.length) % images.length
              : 0;

            if (position >= getCardsToShow) return null;

            const offsetX = getCardOffset(position);
            const scale = getCardScale(position);

            return (
              <div
                key={index}
                className="absolute top-0 transition-all duration-700 ease-out rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105"
                style={{
                  left: isDesktop ? `${offsetX}px` : "50%",
                  transform: isDesktop
                    ? `scale(${scale})`
                    : `translateX(-50%) scale(${scale})`,
                  zIndex: 10 - position,
                  opacity: isDesktop
                    ? position === getCardsToShow - 1
                      ? 0.6
                      : 1
                    : 1,
                  width: isDesktop ? "calc(100% - 50px)" : "90%",
                  height: "100%",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  className="w-full h-full bg-cover bg-center rounded-2xl shadow-lg"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            );
          })}

          {/* Bottom Center Arrows */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 z-20">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/40 text-white shadow-xl hover:bg-black/60 hover:scale-110 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/40 text-white shadow-xl hover:bg-black/60 hover:scale-110 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Title Section */}
      <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto px-4 sm:px-6 py-4 sm:py-6 text-center max-w-[95%] sm:max-w-[85%] md:max-w-3xl lg:max-w-4xl">
          <h2 className="text-slate-400 text-[10px] sm:text-sm md:text-sm font-light tracking-widest">
            Welcome to the
          </h2>

          <h1 className="mt-1 sm:mt-2 text-white text-[14px] sm:text-lg md:text-lg lg:text-2xl xl:text-4xl font-bold tracking-tight leading-snug break-words">
            International Centre for Ocean Governance
          </h1>
        </div>
      </section>
    </>
  );
}
