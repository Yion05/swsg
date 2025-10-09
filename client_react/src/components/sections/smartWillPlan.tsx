import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosFlash } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const SmartWillPlan = () => {
  const [currentSelect, setCurrentSelect] = useState<boolean>(true);
  const { t } = useTranslation("service");

  // to CONTRIBUTOR reading this (hello!!), the plan price display can be modify here
  const nationalityData = [
    {
      nationality: "Singaporean",
      basicPrice: 98,
      advancedPrice: 238,
      currencyText: "SDG",
    },
    {
      nationality: "Non-Singaporean",
      basicPrice: 98,
      advancedPrice: 238,
      currencyText: "SDG",
    },
  ];

  const swapSelect = () => {};

  return (
    <div className="max-w-5xl">
      <section className="bg-button-secondary/30 rounded-full">span</section>
      <section className="bg-linear-to-r from-button to-element-one rounded-xl">
        <h1 className="text-2xl text-center py-2 px-64 font-semibold text-white">
          {t("SmartWills Plans")}
        </h1>
      </section>
      <section className="grid grid-cols-2">
        <div className="px-4 max-w-sm p-6 bg-white rounded-lg">
          <section className="flex justify-between items-center">
            <span className="flex gap-2">
              <div className="bg-linear-to-r from-button to-element-one rounded-xl p-3 w-fit">
                <IoIosFlash className="text-5xl text-white"></IoIosFlash>
              </div>
              <div>
                {" "}
                <p className="text-2xl font-semibold text-wrap w-0">
                  Basic Plan
                </p>
              </div>
            </span>
            <span className="flex gap-2">
              <p className="text-4xl font-bold text-wrap text-button">
                {currentSelect
                  ? nationalityData[0].basicPrice
                  : nationalityData[1].basicPrice}
              </p>
              <p className="text-base font-bold text-wrap text-button">
                {nationalityData[0].currencyText}
              </p>
            </span>
          </section>
          <section className="mt-8 grid-rows-6 grid gap-5 px-2">
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-400 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
          </section>
        </div>
        <div className="px-4 max-w-sm p-6 bg-white rounded-lg">
          <section className="flex justify-between items-center">
            <span className="flex gap-2">
              <div className="bg-linear-to-r from-button to-element-one rounded-xl p-3 w-fit">
                <IoIosFlash className="text-5xl text-white"></IoIosFlash>
              </div>
              <div>
                {" "}
                <p className="text-2xl font-semibold text-wrap w-0">
                  Basic Plan
                </p>
              </div>
            </span>
            <span className="flex gap-2">
              <p className="text-4xl font-bold text-wrap text-button">
                {currentSelect
                  ? nationalityData[0].basicPrice
                  : nationalityData[1].basicPrice}
              </p>
              <p className="text-base font-bold text-wrap text-button">
                {nationalityData[0].currencyText}
              </p>
            </span>
          </section>
          <section className="mt-8 grid-rows-6 grid gap-5 px-2">
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-400 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <span className="p-1.5 bg-green-600 rounded-full text-white">
                <FaCheck className="text-sm"></FaCheck>
              </span>
              <p className="text-hero-gray font-semibold text-lg">
                Lumpsum Distribution
              </p>
            </span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SmartWillPlan;
