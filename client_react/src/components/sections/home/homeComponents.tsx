import * as React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";

export const HeroOneComponentFirst = () => {
  const { t } = useTranslation("home");

  return (
    <section className="rounded-lg py-12 px-6 flex justify-center bg-[url(/assets/HomeBGOne.webp)] bg-cover bg-center">
      <div className="text-white max-w-7xl w-full flex flex-col items-center gap-4 pb-40 pt-8 px-4 sm:px-8 lg:px-12 text-center">
        <h3 className="text-base text-black bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("1.1.1_quote")}
        </h3>

        <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl">
          {t("1.1.2_title")}
        </h1>

        <h2 className="text-xl md:text-2xl max-w-4xl">{t("1.1.3_title")}</h2>

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

export const HeroOneComponentTwo = () => {
  const { t } = useTranslation("home");

  return (
    <section className="rounded-lg px-6 py-12 flex bg-cover bg-center bg-[url(/assets/HomeBGTwo.webp)]">
      <div className="max-w-7xl w-full flex flex-col gap-4 pb-40 pt-8 px-4 sm:px-8 lg:px-12 text-left">
        <h3 className="text-base bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("1.1.5_quote")}
        </h3>

        <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl">
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
    <section className="rounded-lg py-12 px-6 flex justify-center bg-[url(/assets/HomeBGThree.webp)] bg-cover bg-center">
      <div className="text-white max-w-7xl w-full flex flex-col items-center gap-4 pb-40 pt-8 px-4 sm:px-8 lg:px-12 text-center">
        <h3 className="text-base text-black bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("1.1.9_quote")}
        </h3>

        <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl">
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

export const HeroOneComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    const totalPages = 3;
    const intervalTime = 15000;

    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const map = {
    1: <HeroOneComponentFirst></HeroOneComponentFirst>,
    2: <HeroOneComponentTwo></HeroOneComponentTwo>,
    3: <HeroOneComponentThree></HeroOneComponentThree>
  }
  return (
    <div>
      {
        map[currentPage as keyof typeof map]
      }
    </div>
  );
};

export const HeroTwoComponent = () => {
  const { t } = useTranslation("home");

  const pricingData = {
    MY: {
      currency: "SGD",
      basicPrice: 388,
      advancedPrice: 788,
    },
    NOT_MY: {
      currency: "SGD",
      basicPrice: 499,
      advancedPrice: 889,
    },
  };

  const [selectedPlan, setSelectedPlan] = React.useState<
    "MY" | "NOT_MY"
  >("MY");
  const currentPrices = pricingData[selectedPlan];
  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlan(event.target.value as "MY" | "NOT_MY");
  };
  return (
    <div className="bg-white shadow-2xl rounded-lg py-4 px-6 max-w-7xl flex flex-wrap items-center justify-center gap-8 mx-auto">
      <div className="relative">
        <select
          className="appearance-none text-lg px-8 pr-12 py-2.5 border-2 rounded-xl border-button-secondary bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-button-secondary/50 transition-shadow"
          name="planCheck"
          id="planCheck"
          value={selectedPlan}
          onChange={handlePlanChange}
        >
          <option value="MY">{t("1.1.12_forPeople")}</option>
          <option value="NOT_MY">{t("1.1.13_forPeople")}</option>
        </select>

        <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      </div>

      <span className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left">
          {t("SmartWills Plan Basic")}{" "}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.basicPrice})
          </b>
        </h3>
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left">
          {t("SmartWills Plan Advanced")}{" "}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.advancedPrice})
          </b>
        </h3>
      </span>

      <Link
        to={"/service"}
        className="gap-2 rounded-xl bg-button-green py-2.5 px-4 text-lg flex items-center text-white"
      >
        {t("Start Now")}
        <RiArrowRightLine />
      </Link>
    </div>
  );
};
