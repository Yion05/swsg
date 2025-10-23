import { useTranslation } from "react-i18next";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router";

interface cardData {
  cardTitle: string;
  content: string[];
  link?: string;
}

export const TalkToUsCard = ({ cardTitle, content, link }: cardData) => {
  const { t } = useTranslation("service");

  return (
    <div className="shadow-lg p-20 rounded-2xl w-full mx-auto flex flex-col gap-4">
      <h1 className="text-5xl font-semibold">{t(cardTitle)}</h1>
      <span className="flex flex-col gap-4">
        {content.map((data, index) => (
          <p className="text-xl" key={index}>
            {t(data)}
          </p>
        ))}
      </span>
      <span className="flex items-center gap-6 mt-4">
        {" "}
        <Link
          to={"/"}
          className="flex items-center justify-center text-lg font-semibold text-black bg-button-secondary p-2 rounded-xl"
        >
          <BiShoppingBag className="text-2xl"></BiShoppingBag>
        </Link>
        <Link
          to={link ?? "/"}
          className="text-lg font-semibold bg-button-secondary px-4 py-2 rounded-xl"
        >
          {t("talkToUs")}
        </Link>
      </span>
    </div>
  );
};

interface cardAllowData {
  cardTitle: string;
  cardDescription: string;
  content: string[];
}

export const AllowToCard = ({
  cardTitle,
  cardDescription,
  content,
}: cardAllowData) => {
  const { t } = useTranslation("service");

  return (
    <div className="shadow-lg p-20 rounded-2xl w-full mx-auto flex flex-col gap-4">
      <h1 className="text-5xl font-semibold">{t(cardTitle)}</h1>
      <div className="flex flex-col gap-4">
        {content.map((data, index) => (
          <span key={index} className="flex gap-2">
            <img
              src="/assets/icon/customCheck.webp"
              alt="checkMark"
              className="w-5"
            />

            <p className="text-xl">{t(data)}</p>
          </span>
        ))}
      </div>
      <span className="flex items-center gap-6 mt-4">
        {" "}
        <p>{t(cardDescription)}</p>
      </span>
    </div>
  );
};
