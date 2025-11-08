import { Link } from "react-router";

interface cardSchema {
  planType: string;
  price: number;
  currencyText: string;
  features: string[];
  linkTo: string;
  iconSrc: string;
}

const PlanCard = ({
  planType,
  price,
  currencyText,
  features,
  linkTo,
  iconSrc,
}: cardSchema) => {
  return (
    <div className={`flex flex-col rounded-xl mt-6 ${planType == "Basic Plan" ? 'bg-white' : 'bg-button-secondary/15'} overflow-hidden w-full justify-between`}>
      <div className="flex justify-between items-center px-0 md:px-6 pt-6 pb-4">
        <span className="flex items-center gap-3">
          <span className={` bg-linear-to-l ${planType == "Basic Plan" ? ' from-button to-element-one' : ' from-[#FFBB00] via-[#FF2626] to-[#C60000]'} p-3 rounded-2xl`}>
            <img
              src={iconSrc}
              alt={`${planType} Icon`}
              className="w-8 h-8 object-contain "
            />
          </span>
          <p className="text-xl font-bold text-gray-900 text-wrap">{planType}</p>
        </span>

        <span className="flex items-start gap-0.5">
          <p className="text-3xl font-bold text-button">{price}</p>
          <p className="text-base font-semibold text-button">
            {currencyText}
          </p>
        </span>
      </div>

      <ul className="flex flex-col gap-3 px-6 py-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src="/assets/icon/customCheck.webp" alt="checkMark" className="w-5"/>
            <p className="text-lg text-hero-gray font-semibold flex flex-col">
              {feature}
              {feature === "All Assets" && (
                <span className="text-xs text-hero-gray font-medium">
                  {" "}
                  *Add RM200 for 3 Itemized Assets*
                </span>
              )}
              {feature === "1-10 Assets" && (
                <span className="text-xs text-hero-gray font-medium">
                  {" "}
                  *Add RM200 for Unlimited Assets*
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
      <div className="p-6 self-center">
        <Link
          to={linkTo}
          className="flex justify-center items-center gap-2 max-w-36 px-4 bg-button-green text-white font-semibold py-3 rounded-lg"
        >
          Start Now
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-8.485 8.485-1.414-1.414 6.071-6.071H0V9z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
