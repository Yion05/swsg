import * as React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";

export const HeroOneComponent = () => {
  const { t } = useTranslation("home");

  return (
    <section className="p-12 flex justify-center mt-36">
      <div className="w-full flex flex-col gap-4 pt-16">
        <h3 className="text-base bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("page_quote")}
        </h3>

        <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl">
          {t("hero_h1")}
        </h1>

        <h2 className="text-xl md:text-2xl max-w-4xl">{t("hero_h2")}</h2>

        <span className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button px-4 py-2 text-white rounded-xl w-full sm:w-auto text-center"
          >
            {t("startWill")}
          </Link>
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button-secondary px-4 py-2 rounded-xl w-full sm:w-auto text-center"
          >
            {t("learnMore")}
          </Link>
        </span>
      </div>
    </section>
  );
};

export const HeroTwoComponent = () => {
  const { t } = useTranslation("home");
  const pricingData = {
    Malaysian: {
      currency: "RM",
      basicPrice: 388,
      advancedPrice: 788,
    },
    Singaporean: {
      currency: "SGD",
      basicPrice: 98,
      advancedPrice: 238,
    },
  };
  const [selectedPlan, setSelectedPlan] = React.useState<
    "Malaysian" | "Singaporean"
  >("Malaysian");
  const currentPrices = pricingData[selectedPlan];
  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlan(event.target.value as "Malaysian" | "Singaporean");
  };
  return (
    <div className="p-6 max-w-7xl flex flex-wrap items-center justify-center gap-8 mx-auto">
      <div className="relative">
        <select
          className="appearance-none text-lg px-8 pr-12 py-2.5 border-2 rounded-xl border-button-secondary bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-button-secondary/50 transition-shadow"
          name="planCheck"
          id="planCheck"
          value={selectedPlan}
          onChange={handlePlanChange}
        >
          <option value="Malaysian">{t('For Malaysian')}</option>
          <option value="Singaporean">{t('For Singaporean')}</option>
        </select>

        <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      </div>

      <span className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left">
          {t('SmartWills Plan Basic')}{" "}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.basicPrice})
          </b>
        </h3>
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left">
          {t('SmartWills Plan Advanced')}{" "}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.advancedPrice})
          </b>
        </h3>
      </span>

      <Link
        to={"/"}
        className="gap-2 rounded-xl bg-button-green py-2.5 px-4 text-lg flex items-center text-white"
      >
        {t('Start Now')}
        <RiArrowRightLine />
      </Link>
    </div>
  );
};
