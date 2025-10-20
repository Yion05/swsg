import { useTranslation } from "react-i18next";
import { planCardsData } from "../../../data/componentData";
import { Link } from "react-router";

interface planCardSchema {
  title: string;
  buttonText: string;
  link: string;
}

const PlanCard = ({ title, buttonText, link }: planCardSchema) => {
  return (
    <div className="relative flex flex-col items-center justify-between bg-button-secondary/50 rounded-xl overflow-hidden shadow-sm h-64 p-4 text-center">
      <div className="flex flex-col flex-grow items-center justify-center">
        <img src="" className="w-32 h-32" alt={title} />
        <h3 className="font-bold text-white text-lg leading-tight px-8">
          {title}
        </h3>
      </div>
      <span className="flex items-center justify-around w-full h-auto bg-button rounded-full mt-4 py-2">
        <Link
          to={link}
          className=" text-white font-medium text-base"
        >
          {buttonText}
        </Link>
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-end"
        >
          <path d="M9.97788 15L5.90381 10H14.052L9.97788 15Z" fill="white" />
        </svg>
      </span>
    </div>
  );
};

const HeroServicePlan = () => {
  const { t } = useTranslation("service");
  return (
    <section className="w-full py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {" "}
          <p className="text-sm font-medium text-gray-600 mb-2">
            {t("Personalized wills and trusts for you")}
          </p>
          <h2 className="text-5xl font-bold mb-4">
            Plan for <span className="text-red-700">YOU</span>
          </h2>
          <p className="text-lg text-gray-700">
            {t('Tailored Estate Planning for Every Life Stage')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {planCardsData.map((card, index) => (
            <PlanCard
              key={index}
              title={card.title}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroServicePlan;
