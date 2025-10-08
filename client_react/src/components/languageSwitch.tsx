import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = ["en", "cn"];

  const changeLanguage = () => {
    const currentLang = i18n.language;
    const currentIndex = languages.indexOf(currentLang);

    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];

    i18n.changeLanguage(nextLang);
  };

  const getLanguageName = (code: string) => {
    switch (code) {
      case "en":
        return "EN";
      case "cn":
        return "CN";
      default:
        return "Language";
    }
  };

    const getLanguageMap = (code: string) => {
    switch (code) {
      case "en":
        return "/assets/MYFlag1x1.png";
      case "cn":
        return "";
      default:
        return "Language";
    }
  };

  return (
    <button onClick={changeLanguage} className="px-4 py-2 flex items-center gap-2">
      <img
        src={getLanguageMap(i18n.language)}
        alt=""
        className="rounded-full w-8 h-8"
      />
      <p>{getLanguageName(i18n.language)}</p>
    </button>
  );
};

export default LanguageSwitcher;
