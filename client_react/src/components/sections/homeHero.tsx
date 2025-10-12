import { useTranslation } from "react-i18next";
import WaveSeparator from "../ui/waveSVG";

export const HomeHero = () => {
  const { t } = useTranslation("home");

  return (
    <div className="w-full bg-main relative">
      <h1 className="text-white font-semibold text-4xl sm:text-5xl text-center pt-16 pb-12">
        {t("hero2_h1")}
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
              {t("signUP_1")}
            </h2>
            <p>{t("signUP_2")}</p>
            <p className="mt-4">{t("signUP_3")}</p>
          </div>
        </div>

        <div className="flex flex-col mb-12 -mt-12">
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
              {t("fillUP_1")}
            </h2>
            <p>{t("fillUP_2")}</p>
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
              {t("printKEEP_1")}
            </h2>
            <p>{t("printKEEP_2")}</p>
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

  return (
    <div className="px-4 bg-hero-gray text-white flex flex-col items-center text-center gap-2 py-16">
      <p className="text-base bg-button-secondary/70 px-3 py-1 rounded-xl text-black">
        {t("hero5_p1")}
      </p>
      <h1 className="text-5xl font-semibold">{t("hero5_h1")}</h1>
      <p className="text-xl font-normal text-main">{t("hero5_p2")}</p>
      <p className="text-base text-wrap md:w-3xl">{t("hero5_p3")}</p>
    </div>
  );
};
