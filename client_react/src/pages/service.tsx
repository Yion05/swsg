import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { BiShoppingBag } from "react-icons/bi";
import SmartWillPlan from "../components/sections/services/smartWillPlan";
import {
  HeroBackgroundOne,
  PlanForYou,
  ProductSelect,
  SelectRightPlan,
} from "../components/sections/services/serviceComponent";

const Service = () => {
  const { t } = useTranslation("service");
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-24">
      <div className="rounded-lg overflow-hidden">
        <HeroBackgroundOne></HeroBackgroundOne>
      </div>
      <div className="rounded-lg overflow-hidden">
        <SelectRightPlan></SelectRightPlan>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <SmartWillPlan></SmartWillPlan>
      </div>
      <div className="shadow-lg flex flex-col items-center p-4 rounded-2xl">
        <ProductSelect></ProductSelect>
      </div>
      <div className="shadow-lg p-20 rounded-2xl w-full mx-auto flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">{t("hero4_title")}</h1>
        <p className="text-xl">{t("hero4_title")}</p>
        <span className="flex items-center gap-6 mt-4">
          {" "}
          <Link
            to={"/"}
            className="flex items-center justify-center text-lg font-semibold text-black bg-button-secondary p-2 rounded-xl"
          >
            <BiShoppingBag className="text-2xl"></BiShoppingBag>
          </Link>
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button-secondary px-4 py-2 rounded-xl"
          >
            {t("talkToUs")}
          </Link>
        </span>
      </div>

      <div className="shadow-lg rounded-lg overflow-hidden">
        <PlanForYou></PlanForYou>
      </div>
    </section>
  );
};

export default Service;
