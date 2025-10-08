import "../config/i18n";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/languageSwitch";

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <section className="flex flex-col items-center justify-center">
      <LanguageSwitcher></LanguageSwitcher>
      <h1 className="text-3xl text-blue-600 mt-16">
        {t("hero_h1")}
        <p>{t("page_title")}</p>
      </h1>
    </section>
  );
};

export default Home;
