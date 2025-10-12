import { useTranslation } from "react-i18next";
import SmartWillPlan from "../components/sections/smartWillPlan";
import { productServices } from "../data/componentData";
import { Link } from "react-router";
import { BiShoppingBag } from "react-icons/bi";
// import HeroServicePlan from "../components/sections/heroServicePlan";

const Service = () => {
  const { t } = useTranslation("service");
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-24">
      <div className="bg-[url(/assets/serviceBG.webp)] h-[50vh] rounded-xl bg-cover bg-center flex flex-col items-center justify-center gap-4 mt-8">
        <h3 className="text-base bg-button-secondary/75 rounded-xl px-2 py-1 w-fit mb-4">
          {t("sect1_page_quote")}
        </h3>
        <h1 className="text-5xl text-white font-semibold">
          {t("sect1_servicePlan_h1")}
        </h1>
        <p className="text-lg text-white mb-20">{t("sect1_exp_p")}</p>
      </div>
      <div className=" bg-button relative overflow-hidden text-center py-12 rounded-xl">
        <h1 className="text-white font-semibold text-4xl sm:text-5xl text-center">
          {t("hero2_h1")}
        </h1>
        <p className="text-lg  text-center text-white mt-4">
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
      <div className="shadow-lg flex flex-col items-center p-4 rounded-2xl">
        <h1 className="text-5xl font-semibold text-center">
          {t("hero3_productService")}
        </h1>
        <h3 className="text-lg text-center">{t("hero3_des")}</h3>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-8  2xl:px-78 mt-8">
          {productServices.map((data, index) => (
            <span
              className="bg-button-secondary/50 flex flex-col items-center p-4 rounded-2xl "
              key={index}
            >
              <img
                src={data.productImage}
                className="w-32 h-32"
                alt={data.productTitle}
              />
              <h1 className="text-center text-xl font-bold">
                {data.productTitle}
              </h1>
            </span>
          ))}
        </section>
      </div>
      <div className="shadow-lg p-20 rounded-2xl w-full mx-auto flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">
          {t("hero4_title")}
        </h1>
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

      {/* this part is removed */}
      {/* <HeroServicePlan></HeroServicePlan> */}
    </section>
  );
};

export default Service;
