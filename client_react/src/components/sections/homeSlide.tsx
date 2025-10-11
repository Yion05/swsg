import { useTranslation } from "react-i18next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export const Hero4Slide = () => {
  const { t } = useTranslation("home");
  return (
    <div className="shadow-lg rounded-2xl w-full flex relative items-center justify-centerl">
      <IoMdArrowDropleft className="text-5xl absolute -left-0 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2" />
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className=" order-2 lg:order-1 px-12">
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

        <div className="order-1 lg:order-2">
          <img
            src="/assets/heroFourBG.png"
            alt="imageWhyYouNeedAValidWill"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <IoMdArrowDropright className="text-5xl absolute right-0 z-20 text-white cursor-pointer top-1/2 -translate-y-1/2" />
    </div>
  );
};
