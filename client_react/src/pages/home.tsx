import "../config/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { RiArrowRightLine } from "react-icons/ri";
import HomeHero from "../components/sections/homeHero";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import TestimonyHero from "../components/sections/testimony";
import AccoladesHero from "../components/sections/accolades";
import { Hero4Slide } from "../components/sections/homeSlide";

const Home = () => {
  const { t } = useTranslation("home");
  // const [countrySelect, setCountrySelect] = useState<string>("For Malaysian");
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full px-4 sm:px-16 lg:px-36">
      <div className="shadow-lg p-8 rounded-2xl w-full mx-auto flex flex-col gap-4 pt-16 px-4 sm:px-8 lg:px-12 mt-36">
        <h3 className="text-base bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          {t("page_quote")}
        </h3>
        <h1 className="text-5xl font-semibold">{t("hero_h1")}</h1>
        <h2 className="text-xl">{t("hero_h2")}</h2>
        <span className="flex gap-6 mt-4">
          {" "}
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
      <div className="shadow-lg p-6 rounded-2xl max-w-7xl flex flex-wrap items-center justify-center gap-8 mx-auto">
        <select
          className="appearance-auto text-lg px-8 py-2.5 border-2 rounded-xl border-button-secondary"
          name="planCheck"
          id="planCheck"
        >
          <option value="For Malaysian" className="">
            For Malaysian
          </option>
        </select>
        <span className="grid grid-cols-2 gap-8">
          <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30">
            SmartWills Plan Basic <b className="font-semibold">(RM388)</b>
          </h3>
          <h3 className="text-lg px-4 py-2.5 rounded-xl bg-button-secondary/30">
            SmartWills Plan Advanced <b className="font-semibold">(RM788)</b>
          </h3>
        </span>
        <Link
          to={"/"}
          className="gap-2 rounded-xl bg-button-green py-2.5 px-4 text-lg flex items-center text-white"
        >
          Start Now
          <RiArrowRightLine />
        </Link>
      </div>

      <HomeHero />

      <Hero4Slide></Hero4Slide>
      <div className="px-4 bg-hero-gray w-full rounded-xl text-white flex flex-col items-center text-center gap-2 py-16">
        <p className="text-base bg-button-secondary/70 px-3 py-1 rounded-xl text-black">
          {t("hero5_p1")}
        </p>
        <h1 className="text-5xl font-semibold">{t("hero5_h1")}</h1>
        <p className="text-xl font-normal text-main">{t("hero5_p2")}</p>
        <p className="text-base text-wrap md:w-3xl">{t("hero5_p3")}</p>
      </div>
      <TestimonyHero></TestimonyHero>
      <div className="px-4 bg-hero-gray w-full rounded-xl text-white flex flex-col items-center text-center gap-2 py-16">
        <p className="text-base bg-button-secondary/70 px-3 py-1 rounded-xl text-black">
          {t("hero5_p1")}
        </p>
        <h1 className="text-5xl font-semibold">{t("hero5_h1")}</h1>
        <p className="text-xl font-normal text-main">{t("hero5_p2")}</p>
        <p className="text-base text-wrap md:w-3xl">{t("hero5_p3")}</p>
      </div>
      <AccoladesHero></AccoladesHero>
    </section>
  );
};

export default Home;
