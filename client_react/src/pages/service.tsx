import { useTranslation } from "react-i18next";
import SmartWillPlan from "../components/sections/smartWillPlan";

const Service = () => {
  const { t } = useTranslation("service");
  return (
    <section>
      <div className="bg-[url(/assets/serviceBG.webp)] bg-cover bg-center h-screen flex flex-col items-center justify-center gap-4">
        <h3 className="text-base bg-button-secondary/75 rounded-xl px-2 py-1 w-fit mb-4">
          {t("sect1_page_quote")}
        </h3>
        <h1 className="text-5xl text-white font-semibold">
          {t("sect1_servicePlan_h1")}
        </h1>
        <p className="text-lg text-white mb-20">{t("sect1_exp_p")}</p>
      </div>
      <div className="w-full bg-button relative overflow-hidden text-center py-12">
        <h1 className="text-white font-semibold text-4xl sm:text-5xl text-center">
          {t("hero2_h1")}
        </h1>
        <p className="text-xl text-white mt-4">
          {t("hero2_p1")}
          <span className="text-text-secondary font-semibold whitespace-nowrap">
            {t("hero2_sg")}
          </span>
          {t("hero2_p2")}
          <span className="text-text-secondary font-semibold whitespace-nowrap">
            {t("hero2_nosg")}
          </span>
          {t("hero2_p3")}
        </p>
      </div>
      <SmartWillPlan></SmartWillPlan>
    </section>
  );
};

export default Service;
