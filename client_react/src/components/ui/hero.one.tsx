import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const HeroOneComponentFirst = () => {
  const { t } = useTranslation("home");

  return (
    <section
      className="
        rounded-lg 
        py-8 sm:py-12
        flex justify-center 
        bg-[url(/assets/HomeBGOne.webp)] bg-cover bg-center
        min-h-[50vh] md:min-h-[60vh] 
      "
    >
      <div
        className="
          text-white max-w-7xl w-full 
          flex flex-col items-center gap-4 
          pb-8 pt-4 sm:pb-24 sm:pt-8 md:pb-32 md:pt-12 
          px-4 sm:px-8 lg:px-12 text-center
      "
      >
        <h3
          className="
          text-base text-black 
          bg-button-secondary/30 rounded-xl 
          px-2 py-1 w-fit
          backdrop-blur-sm
          "
        >
          {t("1.1.1_quote")}
        </h3>
        <h1
          className="
          text-4xl sm:text-5xl md:text-6xl 
          font-semibold max-w-7xl
          "
        >
          {t("1.1.2_title")}
        </h1>
        <h2
          className="
          text-lg sm:text-xl md:text-2xl 
          max-w-4xl
          "
        >
          {t("1.1.3_title")}
        </h2>
        <span className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link
            to={"/service"}
            className="
              text-lg font-semibold 
              bg-button px-4 py-2 
              text-white rounded-xl 
              w-full sm:w-auto text-center
              hover:opacity-90 transition-opacity
            "
          >
            {t("1.1.4_startWill")}
          </Link>
        </span>
      </div>
    </section>
  );
};

export const HeroOneComponentTwo = () => {
  const { t } = useTranslation("home");

  return (
    <section className="rounded-lg px-6 py-12 flex bg-cover bg-center min-h-[50vh] md:min-h-[60vh] bg-[url(/assets/HomeBGTwo.webp)]">
      <div
        className="max-w-7xl w-full flex flex-col gap-4 pb-40 pt-8 px-4 sm:px-8 lg:px-12 text-left
      "
      >
        <h3
          className="text-base text-black bg-button-secondary/30 rounded-xl px-2 py-1 w-fit"
        >
          {t("1.1.5_quote")}
        </h3>

        <h1 className="text-4xl md:text-6xl font-semibold max-w-7xl">
          {t("1.1.6_title")}
        </h1>
        <h2 className="text-xl md:text-2xl max-w-4xl">{t("1.1.7_title")}</h2>
        <span className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link
            to={"/service"}
            className="text-lg font-semibold bg-button px-4 py-2 text-white rounded-xl w-full sm:w-auto text-center"
          >
            {t("1.1.4_startWill")}
          </Link>
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button-secondary px-4 py-2 rounded-xl w-full sm:w-auto text-center"
          >
            {t("1.1.8_learnMore")}
          </Link>
        </span>
      </div>
    </section>
  );
};

export const HeroOneComponentThree = () => {
  const { t } = useTranslation("home");

  return (
    <section className="rounded-lg py-12 px-6 flex justify-center bg-[url(/assets/HomeBGThree.webp)] bg-cover bg-center min-h-[50vh] md:min-h-[60vh] ">
      <div
        className="text-white max-w-7xl w-full 
          flex flex-col items-center gap-4 
          pb-8 pt-4 sm:pb-24 sm:pt-8 md:pb-32 md:pt-12 
          px-4 sm:px-8 lg:px-12 text-center"
      >
        <h3 className="text-base text-black bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("1.1.9_quote")}
        </h3>

        <h1 className="text-4xl md:text-6xl font-semibold max-w-7xl">
          {t("1.1.10_title")}
        </h1>

        <h2 className="text-xl md:text-2xl max-w-4xl">{t("1.1.11_title")}</h2>

        <span className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link
            to={"/service"}
            className="text-lg font-semibold bg-button px-4 py-2 text-white rounded-xl w-full sm:w-auto text-center"
          >
            {t("1.1.4_startWill")}
          </Link>
        </span>
      </div>
    </section>
  );
};
