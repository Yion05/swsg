import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { hero4SlideData } from "../../../data/componentData";

export const Hero4Slide = () => {
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

  const renderDescription = (key: string) => {
    const part1 = t(`${key}part1`);
    const highlight = t(`${key}highlight`);
    const part2 = t(`${key}part2`);

    if (highlight) {
      return (
        <>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-2">
            {part1} <b className="text-button font-semibold">{highlight}</b>
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{part2}</h1>
        </>
      );
    }
    return part1;
  };

  return (
    <div
      className={`w-full flex relative items-center ${
        currentContent.alignment === "start"
          ? "justify-start text-left"
          : "justify-end text-right"
      } min-h-128 bg-cover bg-center}`}
      style={{
        backgroundImage: `url(/assets/slide_image/${currentSlide}.webp`,
      }}
    >
      <IoMdArrowDropleft
        onClick={goToPrevious}
        className={`text-5xl absolute -left-0 z-20 cursor-pointer top-1/2 -translate-y-1/2 ${
          currentContent.alignment === "end" ? "text-white" : "text-secondary"
        }`}
      />
      <div
        className={`max-w-7xl mx-auto w-full flex
                            ${
                              currentContent.alignment === "start"
                                ? "justify-start"
                                : "justify-end"
                            }`}
      >
        <section
          className={`max-w-xl w-full 
                                ${
                                  currentContent.alignment === "start"
                                    ? "text-left"
                                    : "text-right"
                                }`}
        >
          <div className="order-2 lg:order-1">
            {renderDescription(currentContent.titleSegment)}
            <p className="text-base lg:text-lg text-black">
              {t(currentContent.paragraph)}
            </p>
          </div>
        </section>
      </div>

      <IoMdArrowDropright
        onClick={goToNext}
        className={`text-5xl absolute right-0 z-20 ${
          currentContent.alignment === "start" ? "text-white" : "text-secondary"
        }  cursor-pointer top-1/2 -translate-y-1/2`}
      />
    </div>
  );
};
