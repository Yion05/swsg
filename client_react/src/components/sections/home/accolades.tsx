import { useTranslation } from "react-i18next";
import type { accolades_schema } from "../../../types/types";
import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const AccoladesHero = () => {
  const { t } = useTranslation("accolades");
  // data to for the MyAccolades, you can modify the accolades here
  const staticData: accolades_schema[] = [
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_1_title",
      accolades_des: "acco_1_des",
    },
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_2_title",
      accolades_des: "acco_2_des",
    },
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_3_title",
      accolades_des: "acco_3_des",
    },
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_4_title",
      accolades_des: "acco_4_des",
    },
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_5_title",
      accolades_des: "acco_5_des",
    },
    {
      accolades_logo: "/assets/accolades/ISO.webp",
      accolades_title: "acco_6_title",
      accolades_des: "acco_6_des",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const currentAccolade = staticData[currentSlide];
  const totalSlides = staticData.length;

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
    const part1 = t(`${key}_part1`) || t(key);
    const highlight = t(`${key}_highlight`);
    const part2 = t(`${key}_part2`);

    if (highlight) {
      return (
        <>
          {part1}
          <span className="text-main font-semibold whitespace-nowrap">
            {highlight}
          </span>
          {part2}
        </>
      );
    }
    return part1;
  };

  return (
    <section className="shadow-lg rounded-2xl w-full py-16">
      <div className="flex flex-col items-center text-center max-w-full mx-auto gap-4">
        <h1 className="font-semibold text-3xl sm:text-4xl">
          {t("ourAccolades")}
        </h1>
        <p className="text-base sm:text-lg mb-4">{t("secuAndTrust")}</p>

        <div className="flex relative items-center justify-center w-full py-8">
          <IoMdArrowDropleft
            className="text-5xl absolute -left-2 sm:left-4 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
            onClick={goToPrevious}
          />

          <div key={currentSlide} className="flex flex-col items-center text-center w-full max-w-7xl px-12 md:px-24 opacity-100 transition-opacity duration-500 ease-in-out">
            <img
              src={currentAccolade.accolades_logo}
              alt={currentAccolade.accolades_title}
              className="w-24 sm:w-32 h-auto object-contain mb-4"
            />

            <h3 className="font-semibold text-xl mb-2">
              {t(currentAccolade.accolades_title)}
            </h3>

            <p className="text-sm sm:text-base max-w-7xl">
              {renderDescription(currentAccolade.accolades_des)}
            </p>
          </div>

          <IoMdArrowDropright
            className="text-5xl absolute -right-2 sm:right-4 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
            onClick={goToNext}
          />
        </div>

        {/* to contributor reading(hi), if you don't want to see the slides indicator, you can remove this div below */}
        <div className="flex justify-center mt-4 gap-2">
          {staticData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-9 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-main scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccoladesHero;
