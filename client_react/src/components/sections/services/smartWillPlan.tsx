import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  basicFeatures,
  advancedFeatures,
  nationalityData,
} from "../../../data/componentData";
import PlanCard from "../../layout/planCard";
import { SmartConsult } from "../../ui/custom.icon";

const SmartWillPlan = () => {
  const [currentSelect, setCurrentSelect] = useState<string>("Singaporean"); // to contributor reading (hi again), Nationality on site can be switch here
  const { t } = useTranslation("service");

  const selectedData =
    nationalityData.find((item) => item.nationality === currentSelect) ||
    nationalityData[0];

  const handleSwapSelect = (nationality: string) => {
    setCurrentSelect(nationality);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 px-12">
      <div className="grid grid-cols-2 gap-4 bg-button-secondary/30 px-2 rounded-full py-2 overflow-hidden mb-12">
        <button
          onClick={() => handleSwapSelect("Singaporean")}
          className={`px-8 py-1 font-semibold rounded-full transition-colors ${
            selectedData.nationality === "Singaporean"
              ? `bg-button text-white`
              : `bg-none text-black`
          }`}
        >
          Singaporean
        </button>
        <button
          onClick={() => handleSwapSelect("Non-Singaporean")}
          className={`px-8 py-1 font-semibold rounded-full transition-colors ${
            selectedData.nationality === "Non-Singaporean" ? `bg-button text-white` : `bg-none text-black`
          }`}
        >
          Non-Singaporean
        </button>
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
        <section className="bg-linear-to-r from-button to-element-one rounded-xl py-3">
          <h1 className="text-2xl text-center font-semibold text-white">
            SmartWills Plans
          </h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <PlanCard
            planType="Basic Plan"
            price={selectedData.basicPrice}
            currencyText={selectedData.currencyText}
            features={basicFeatures}
            linkTo="/"
            iconSrc="/assets/icon/flash.webp"
          />
          <PlanCard
            planType="Advanced Plan"
            price={selectedData.advancedPrice}
            currencyText={selectedData.currencyText}
            features={advancedFeatures}
            linkTo="/"
            iconSrc="/assets/icon/rocket.webp"
          />
        </section>
      </div>
      <span className="text-sm bg-button-secondary/30 rounded-full py-2 px-6 mt-4">
        <p className="text-[#404040] text-center mx-auto font-medium">
          {currentSelect === "Singaporean" ? t("service_sg_footer1") : t('service_non_footer1')}
          <span className="text-button font-bold">{currentSelect === "Singaporean" ? t("service_sg_footer2") : t('service_non_footer2')}</span>
        </p>
        <p className="text-[#404040] text-center mx-auto font-medium">
          {currentSelect === "Singaporean" ? t("service_sg_footer3") : t('service_non_footer3')}
        </p>
      </span>

      <SmartConsult></SmartConsult>
    </div>
  );
};



export default SmartWillPlan;
