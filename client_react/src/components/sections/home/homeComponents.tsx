import * as React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router";
import {
  HeroOneComponentFirst,
  HeroOneComponentThree,
  HeroOneComponentTwo,
} from "../../ui/hero.one";

export const HeroOneComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const heroComponents = [
    HeroOneComponentFirst,
    HeroOneComponentTwo,
    HeroOneComponentThree,
  ];
  const SLIDE_VIEW_TIME = 8000;
  const TRANSITION_DELAY_MS = 800; 

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      const timeout = setTimeout(() => {
        setCurrentPage((prevIndex) => (prevIndex + 1) % heroComponents.length);

        setIsTransitioning(false);

      }, TRANSITION_DELAY_MS);

      return () => {
        clearTimeout(timeout);
      };
    }, SLIDE_VIEW_TIME);

    return () => clearInterval(interval);
  }, [heroComponents.length]);
  const CurrentHero = heroComponents[currentPage];

  return (
    <div className="relative overflow-hidden">
      <div
        key={currentPage}
        className={`transition-all duration-700 ease-in-out ${
          isTransitioning ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <CurrentHero />
      </div>
    </div>
  );
};

export const HeroTwoComponent = () => {
  const { t } = useTranslation("home");

  const pricingData = {
    SG: {
      currency: "SGD",
      basicPrice: 98,
      advancedPrice: 238,
    },
    NOT_SG: {
      currency: "SGD",
      basicPrice: 129,
      advancedPrice: 269,
    },
  };

  const [selectedPlan, setSelectedPlan] = React.useState<"SG" | "NOT_SG">("SG");
  const currentPrices = pricingData[selectedPlan];
  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlan(event.target.value as "SG" | "NOT_SG");
  };
  return (
    <div className="bg-white shadow-2xl rounded-lg py-4 px-2 max-w-[1280px] flex flex-shrink flex-wrap 2xl:flex-nowrap items-center justify-center gap-4 mx-auto">
      <div className="relative">
        <select
          className="appearance-none text-base px-8 pr-12 py-2.5 border-2 rounded-xl border-button-secondary bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-button-secondary/50 transition-shadow"
          name="planCheck"
          id="planCheck"
          value={selectedPlan}
          onChange={handlePlanChange}
        >
          <option value="SG">{t("1.1.12_forPeople")}</option>
          <option value="NOT_SG">{t("1.1.13_forPeople")}</option>
        </select>

        <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      </div>

      <span className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <h3 className="text-base px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left text-nowrap">
          {t("SmartWills Plan Basic")}{" "}{selectedPlan === "NOT_SG" ? "+" : ""}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.basicPrice})
          </b>
        </h3>
        <h3 className="text-base px-4 py-2.5 rounded-xl bg-button-secondary/30 text-center sm:text-left text-nowrap">
          {t("SmartWills Plan Advanced")}{" "}{selectedPlan === "NOT_SG" ? "+" : ""}
          <b className="font-semibold">
            ({currentPrices.currency}
            {currentPrices.advancedPrice})
          </b>
        </h3>
      </span>

      <Link
        to={"/service"}
        className="gap-2 rounded-xl bg-button-green py-2.5 px-4 text-base flex items-center text-white text-nowrap"
      >
        {t("Start Now")}
        <RiArrowRightLine />
      </Link>
    </div>
  );
};
