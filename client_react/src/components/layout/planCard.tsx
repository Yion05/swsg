import { Link } from "react-router";
import { featureMethods } from "../../data/componentData";

interface cardSchema {
  planType: string;
  price: number;
  currencyText: string;
  features: string[];
  linkTo: string;
  iconSrc: string;
  currentSelect: string;
}

const PlanCard = ({
  planType,
  price,
  currencyText,
  features,
  linkTo,
  iconSrc,
  currentSelect,
}: cardSchema) => {
  const isGradientActive = currentSelect === "Non-Singaporean";

  const baseBgClass = planType === "Basic Plan" ? "bg-white" : "";

  return (
    <section className="relative flex flex-col">
      <div
        className={`p-1 flex flex-col rounded-xl mt-6 overflow-y-hidden w-full justify-between relative transition-colors duration-500
        ${
          isGradientActive
            ? " bg-gradient-to-r from-button via-[#FF2626] to-text-secondary"
            : baseBgClass
        }
        `}
      >
        <div
          className={`
        flex flex-col w-full h-full
        ${
          isGradientActive
            ? "rounded-[calc(0.75rem-1px)] bg-white"
            : "rounded-xl"
        } 
        justify-between
        `}
        >
          <div className="bg-white rounded-xl mb-12">
            <div className="flex justify-between items-center px-4 pt-6 pb-4">
              <span className="flex items-center gap-1 md:gap-3">
                <span
                  className={`bg-linear-to-l ${
                    planType == "Basic Plan"
                      ? " from-button to-element-one"
                      : " from-[#FFBB00] via-[#FF2626] to-[#C60000]"
                  } p-2 lg:p-3 rounded-2xl`}
                >
                  <img
                    src={iconSrc}
                    alt={`${planType} Icon`}
                    className="w-8 h-8 object-contain "
                  />
                </span>
                <p className="text-base md:text-lg font-bold text-gray-900 text-wrap">
                  {planType.split(" ").map((data, index)=>(
                    <p key={index}>{data}{index === 0 ? "+" : ""}</p>
                  ))}
                </p>
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
                <li key={index} className="flex items-center gap-4">
                  <img
                    src="/assets/icon/customCheck.webp"
                    alt="checkMark"
                    className="w-7"
                  />
                  <span>
                    <p className="text-sm text-hero-gray font-semibold flex flex-col">
                      {featureMethods[index]}
                    </p>
                    <p className={`text-lg flex flex-col ${index === 0 ? "text-[#727272] font-bold" : "text-hero-gray font-semibold"}`}>
                      {feature}
                      {feature === "All Assets" && (
                        <span className="text-xs text-hero-gray font-medium">
                          *Add $50 for 3 Itemized Assets*
                        </span>
                      )}
                      {feature === "1-10 Assets" && (
                        <span className="text-xs text-hero-gray font-medium">
                          *Add $50 for Unlimited Assets*
                        </span>
                      )}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-6 self-center absolute bottom-0 translate-y-1/2 z-20">
        {" "}
        <Link
          to={linkTo}
          className="flex justify-center items-center gap-2 max-w-36 px-4 bg-button-green hover:bg-button-green/80 transition-colors duration-500 text-white font-semibold py-3 rounded-lg"
        >
          Start Now
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-8.485 8.485-1.414-1.414 6.071-6.071H0V9z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PlanCard;
