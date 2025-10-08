import { useState } from "react";
import "../config/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

const Home = () => {
  const { t } = useTranslation("home");
  // const [countrySelect, setCountrySelect] = useState<string>("For Malaysian");
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="sm:self-start flex flex-col gap-2 py-24">
        <h3 className="text-base bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("page_quote")}
        </h3>
        <h1 className="text-5xl font-semibold">{t("hero_h1")}</h1>
        <h2 className="text-xl">{t("hero_h2")}</h2>
        <span className="flex gap-6 mt-6">
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button px-4 py-2 text-white rounded-xl"
          >
            {t("startWill")}
          </Link>
          <Link
            to={"/"}
            className="text-lg font-semibold bg-button-secondary px-4 py-2 rounded-xl"
          >
            {t("learnMore")}
          </Link>
        </span>
      </div>
      <div className="flex items-center gap-4 mt-24">
        <select
          className="appearance-auto text-lg px-6 py-2.5 border-2 rounded-xl border-button-secondary"
          name="planCheck"
          id="planCheck"
        >
          <option value="For Malaysian" className="">
            For Malaysian
          </option>
        </select>
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30">
          SmartWills Plan Basic <b className="font-semibold">(RM388)</b>
        </h3>
        <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30">
          SmartWills Plan Advanced <b className="font-semibold">(RM788)</b>
        </h3>
        <Link to={"/"} className="gap-2 rounded-xl bg-button-green py-2.5 px-4 text-lg flex items-center text-white">
          Start Now
          <RiArrowRightLine />
        </Link>
      </div>
    </section>
  );
};

export default Home;
