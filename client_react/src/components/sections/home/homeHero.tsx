import { useTranslation } from "react-i18next";
import WaveSeparator from "../../ui/waveSVG";
import { contactItems } from "../../../data/componentData";
import useLazyLoad from "../../../hook/useLazyLoad";

export const HomeHero = () => {
  const { t } = useTranslation("home");
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  return (
    <div className={`w-full bg-main relative ${slideFromTopAnimation}`} ref={sectionRef}>
      <h1 className="text-white font-semibold text-4xl sm:text-5xl text-center pt-16 pb-12">
        {t("1.2.1_title")}
      </h1>

      <section className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 px-8 md:px-12 gap-8 lg:gap-12 py-12 relative z-20">
        <div className="flex flex-col">
          <h3 className="text-text-secondary font-semibold text-xl mb-3 ml-6">
            Step 1
          </h3>
          <div className=" rounded-2xl bg-white flex flex-col items-center text-center p-6 h-full">
            <span className="rounded-full bg-img-deco p-4">
              <img
                src="/assets/SignUP.png"
                className="w-14 h-14 object-contain"
                alt="Sign Up icon"
              />
            </span>
            <h2 className="font-semibold text-2xl mt-4 mb-2">
              {t("1.2.2_contentTitle")}
            </h2>
            <p>{t("1.2.3_content")}</p>
            <p className="mt-4">{t("1.2.4_content")}</p>
          </div>
        </div>

        <div className="flex flex-col md:mb-12 md:-mt-12">
          <h3 className="text-text-secondary font-semibold text-xl mb-3 ml-6">
            Step 2
          </h3>
          <div className="rounded-2xl bg-white flex flex-col items-center text-center p-6 h-full">
            <span className="rounded-full bg-img-deco p-4">
              <img
                src="/assets/SignUP.png"
                className="w-14 h-14 object-contain"
                alt="Fill Up icon"
              />
            </span>
            <h2 className="font-semibold text-2xl mt-4 mb-2">
              {t("1.2.5_contentTitle")}
            </h2>
            <p>{t("1.2.6_content")}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-text-secondary font-semibold text-xl mb-3 ml-6">
            Step 3
          </h3>
          <div className="rounded-2xl bg-white flex flex-col items-center text-center p-6 h-full">
            <span className="rounded-full bg-img-deco p-4">
              <img
                src="/assets/SignUP.png"
                className="w-14 h-14 object-contain"
                alt="Print icon"
              />
            </span>
            <h2 className="font-semibold text-2xl mt-4 mb-2">
              {t("1.2.7_contentTitle")}
            </h2>
            <p>{t("1.2.8_content")}</p>
          </div>
        </div>
      </section>

      <div className=" absolute bottom-0 w-full lg:h2/4 z-10">
        <WaveSeparator />
      </div>
    </div>
  );
};

export const ProtectWhat = () => {
  const { t } = useTranslation("home");
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  return (
    <div className={`px-4 bg-hero-gray text-white flex flex-col items-center text-center gap-2 py-16 ${slideFromTopAnimation}`} ref={sectionRef}>
      <p className="text-base bg-button-secondary/70 px-3 py-1 rounded-xl text-black">
        {t("1.4.1_quote")}
      </p>
      <h1 className="text-5xl font-semibold">{t("1.4.2_title")}</h1>
      <p className="text-xl font-normal text-main">{t("1.4.3_title")}</p>
      <p className="text-base text-wrap md:w-3xl">{t("1.4.4_description")}</p>
    </div>
  );
};

export const InfoHero = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;


  return (
    <div className={`w-full bg-hero-gray py-12 rounded-xl ${slideFromTopAnimation}`} ref={sectionRef}>
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 justify-items-center text-center">
          {contactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-button p-4 rounded-full mb-4">
                <img src={item.icon} alt={item.title} className="w-6 h-6"/>
              </div>

              <p className="text-white text-lg font-normal mb-1">
                {item.title}
              </p>
              {item.subtitle && (
                <p className="text-white text-lg font-normal text-nowrap">
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
