import { useEffect, useRef, useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import {
  basicFeatures,
  advancedFeatures,
  nationalityData,
} from "../../../data/componentData";
import PlanCard from "../../layout/planCard";
import { SmartConsult } from "../../ui/custom.icon";
import type { onCloseSchema } from "../../../types/component.type";
import { IoMdClose } from "react-icons/io";
import { SelectRightPlan } from "./serviceComponent";

const SmartWillPlan: FC<onCloseSchema> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    setIsAnimating(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClosing]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const animationClasses =
    isAnimating && !isClosing ? "opacity-100 scale-100" : "opacity-0 scale-95";

  const [currentSelect, setCurrentSelect] = useState<string>("Singaporean"); // to contributor reading (hi again), Nationality on site can be switch here
  const { t } = useTranslation("service");

  const selectedData =
    nationalityData.find((item) => item.nationality === currentSelect) ||
    nationalityData[0];

  const handleSwapSelect = (nationality: string) => {
    setCurrentSelect(nationality);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/25 flex items-center justify-center transition-opacity duration-500 px-4 md:px-16 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        ref={modalRef}
        className={`
           transition-all duration-500 ease-out transform
           ${animationClasses}
           bg-white rounded-3xl max-w-[1440px] max-h-[90vh] w-full overflow-y-scroll overflow-x-hidden
        `} 
      >
        <SelectRightPlan></SelectRightPlan>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-red-600 text-3xl z-50 p-2 cursor-pointer"
          aria-label="Close modal"
        >
          <IoMdClose />
        </button>

        <div className="p-8 sm:p-12">
          <div className="grid grid-cols-2 gap-4 bg-button-secondary/30 px-2 rounded-full py-2 overflow-hidden mb-12 max-w-md mx-auto">
            <button
              onClick={() => handleSwapSelect("Singaporean")}
              className={`text-xs text-nowrap md:text-base px-2 md:px-4 lg:px-8 py-1 font-semibold rounded-full transition-colors duration-500 ${
                selectedData.nationality === "Singaporean"
                  ? `bg-button text-white`
                  : `bg-none text-black`
              }`}
            >
              Singaporean
            </button>
            <button
              onClick={() => handleSwapSelect("Non-Singaporean")}
              className={`text-xs text-nowrap md:text-base px-2 md:px-4 lg:px-8 py-1 font-semibold rounded-full transition-colors duration-500 ${
                selectedData.nationality === "Non-Singaporean"
                  ? `bg-button text-white`
                  : `bg-none text-black`
              }`}
            >
              Non-Singaporean
            </button>
          </div>

          <div className="max-w-4xl w-full mx-auto relative">
            <section className={`bg-linear-to-r rounded-xl transition-colors duration-500 py-3 ${currentSelect === "Singaporean" ? "from-button via-element-one to-element-one" : "from-button via-[#FF2626] to-text-secondary" }`}>
              <h1 className="text-xl md:text-2xl text-center font-semibold text-white">
                SmartWills Plans
              </h1>
            </section>

            <section className={"grid grid-cols-1 md:grid-cols-2 gap-8 relative"}>
              {" "}
              <PlanCard
                planType="Basic Plan"
                price={selectedData.basicPrice}
                currencyText={selectedData.currencyText}
                features={basicFeatures}
                linkTo="/"
                iconSrc="/assets/icon/flash.webp"
                currentSelect={currentSelect}
              />
              <PlanCard
                planType="Advanced Plan"
                price={selectedData.advancedPrice}
                currencyText={selectedData.currencyText}
                features={advancedFeatures}
                linkTo="/"
                iconSrc="/assets/icon/rocket.webp"
                currentSelect={currentSelect}
              />
              
              <SmartConsult></SmartConsult>
            </section>
          </div>

          <div className="max-w-7xl mx-auto mt-16 bg-button-secondary/30 rounded-2xl md:rounded-full">
            {" "}
            <span className="relative text-sm py-2 px-6">
              <p className="text-[#404040] text-center mx-auto font-medium ">
                {currentSelect === "Singaporean"
                  ? t("2.3.1_content")
                  : t("2.3.4_content")}{" "}
                <span className="text-button font-bold">
                  {currentSelect === "Singaporean"
                    ? t("2.3.2_content")
                    : t("2.3.5_content")}
                </span>
              </p>
              <p className="text-[#404040] text-center mx-auto font-medium">
                {currentSelect === "Singaporean"
                  ? t("2.3.3_content")
                  : t("2.3.6_content")}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWillPlan;
