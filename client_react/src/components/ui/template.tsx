import { useTranslation } from "react-i18next";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router";

export const TalkToUs = () => {
  const { t } = useTranslation("service");

  return (
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
  );
};
