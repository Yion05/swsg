import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { hero4SlideData } from "../../../data/componentData";
import useLazyLoad from "../../../hook/useLazyLoad";
import "../../../index.css";

export const Hero4Slide = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  const { t } = useTranslation("slides");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const currentContent = hero4SlideData[currentSlide];
  const totalSlides = hero4SlideData.length;

  const goToPrevious = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const renderDescription = (key: string, index: number) => {
    const part1 = t(`${key}part1`);
    const highlight = t(`${key}highlight`);
    const part2 = t(`${key}part2`);

    if (highlight && index === 0) {
      return (
        <span className="not-xl:flex not-xl:flex-col not-xl:items-center">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-0 xl:mb-2">
            {part1} <b className="text-button font-semibold">{highlight}</b>
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4 not-xl:text-center">{part2}</h1>
        </span>
      );
    } else {
      return (
        <span className="not-xl:flex not-xl:flex-col not-xl:items-center">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-0 xl:mb-2 text-button ">
            {highlight} <b className="font-semibold text-black">{part1}</b>
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4 not-xl:text-center">{part2}</h1>
        </span>
      );
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${slideFromTopAnimation}`}
      ref={sectionRef}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        }}
      >
        {hero4SlideData.map((slide, index) => (
          <div className="w-full flex items-center flex-col" key={index}>
            <div className="xl:hidden w-full mb-4">
              <img
                src={`./assets/slide_image/mobile/${index + 1}.webp`}
                alt={slide.titleSegment}
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className={`w-full flex items-center justify-center px-2 md:px-8 bg-cover bg-center py-6 xl:py-0 xl:min-h-128 flex-shrink-0 
                     lg-no-bg xl:flex`}
              style={{
                width: `${700 / totalSlides}%`,
                backgroundImage: `url(/assets/slide_image/${index}.webp)`,
              }}
            >
              <div
                className={`max-w-7xl w-full flex drop-shadow-lg 
                          ${
                            slide.alignment === "start"
                              ? "xl:justify-start justify-center"
                              : "xl:justify-end justify-center"
                          }`}
              >
                <section
                  className={`max-w-[36rem] w-full
                          ${
                            slide.alignment === "start"
                              ? "text-left"
                              : "text-right"
                          }`}
                >
                  <div className="order-2 lg:order-1">
                    {renderDescription(slide.titleSegment, currentSlide)}
                    <p className="text-base lg:text-lg not-xl:text-center">
                      {t(slide.paragraph)}
                    </p>
                  </div>
                  <IoMdArrowDropleft
                    onClick={goToPrevious}
                    className={`xl:hidden text-5xl absolute -left-4 z-20 cursor-pointer top-1/2 -translate-y-1/2 ${
                      currentContent.alignment === "end"
                        ? "text-white not-xl:text-secondary"
                        : "text-secondary"
                    }`}
                  />
                  <IoMdArrowDropright
                    onClick={goToNext}
                    className={`xl:hidden text-5xl absolute -right-4 z-20 ${
                      currentContent.alignment === "start"
                        ? "text-white not-xl:text-secondary"
                        : "text-secondary"
                    } cursor-pointer top-1/2 -translate-y-1/2`}
                  />
                </section>
              </div>
            </div>
          </div>
        ))}
      </div>

      <IoMdArrowDropleft
        onClick={goToPrevious}
        className={`not-xl:hidden text-5xl absolute -left-0 z-20 cursor-pointer top-1/2 -translate-y-1/2 ${
          currentContent.alignment === "end"
            ? "text-white not-xl:text-secondary"
            : "text-secondary"
        }`}
      />
      <IoMdArrowDropright
        onClick={goToNext}
        className={`not-xl:hidden text-5xl absolute right-0 z-20 ${
          currentContent.alignment === "start"
            ? "text-white not-xl:text-secondary"
            : "text-secondary"
        } cursor-pointer top-1/2 -translate-y-1/2`}
      />
    </div>
  );
};
