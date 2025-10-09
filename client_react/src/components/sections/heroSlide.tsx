import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import type { slidePage } from "../../types/types";

const HeroSlide = () => {
  const [slideIndex, setSlideIndex] = useState<slidePage>(0);
  const { t } = useTranslation("slide"); 

  return (
    <div className="w-full flex relative items-center justify-center py-20">
      <IoMdArrowDropleft className="text-5xl absolute left-4 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2" />
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto px-4 sm:px-8 lg:px-12">
        <div className="px-4 sm:px-8 lg:px-16 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-2">
            {t("hero4_why1_slide1")}{" "}
            <b className="text-button font-semibold">{t("You")}</b>
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            {t("hero4_why2_slide1")}
          </h1>
          <p className="text-base lg:text-lg text-gray-700">
            {t("hero4_whyReason1_slide1")}
          </p>
        </div>

        <div className="order-1 lg:order-2 p-4">
          <img
            src="/assets/heroFourBG.png"
            alt="imageWhyYouNeedAValidWill"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <IoMdArrowDropright className="text-5xl absolute right-4 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default HeroSlide;
