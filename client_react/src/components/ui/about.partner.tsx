import type React from "react";
import type { platformPartnerSchema } from "../../types/component.type";
import { useState } from "react";
import { Link } from "react-router";

interface PartnerContent {
  company_name: string;
  company_logo: string;
  details: string[];
  link?: string;
}

interface PlatformPartnerCardProps {
  data: PartnerContent;
  index: number;
}

export const PlatformPartnerCard: React.FC<PlatformPartnerCardProps> = ({
  data,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const containerHeightClass = isFlipped
    ? `h-auto ${data.company_name === "Amazon Web Services (AWS)" ? "md:min-h-[800px] xl:min-h-[600px]" : data.company_name === "RiverSide Training" ? "min-h-[600px] xl:min-h-[500px]" : "min-h-[500px]"}`
    : "min-h-[350px]";
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      onClick={handleFlip}
      className={`relative w-full cursor-pointer group transition-all duration-700 ease-in-out ${isFlipped ? 'not-lg:overflow-y-scroll' : ''} ${containerHeightClass}`}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute inset-0 p-8 flex flex-col items-center justify-center rounded-xl hover:shadow-lg duration-500 hover:bg-black/10`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={data.company_logo}
            alt={data.company_name}
            className={`w-auto ${
              (data.company_name === "HitPay (PCI-DSS compliant)" || data.company_name === "RiverSide Training")
                ? "max-h-24"
                : "max-h-36"
            } mb-4 object-contain`}
          />
          <h1 className="text-xl font-bold text-center uppercase">
            {data.company_name}
          </h1>
        </div>

        <div
          className="absolute inset-0 p-6 md:p-8 rounded-xl shadow-lg min-h-fit bg-button-secondary/30"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-lg font-bold text-button mb-3 uppercase">
            {data.company_name}
          </h2>
          {data.details.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm text-black mb-3 leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
          {data.link ? (
            <Link className="text-sm text-[#004DB8] mb-3 leading-relaxed text-center duration-500 hover:underline" target="_blank" to={data.link}>
              {data.link}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const AboutUsCompany: React.FC<platformPartnerSchema> = ({
  title,
  description,
  content,
}) => {
  return (
    <section className="max-w-[1440px] mx-auto py-8 bg-white flex flex-col justify-center text-center clear-both">
      <div className=" flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-center text-base lg:text-xl max-w-7xl">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          {content.map((data, index) => (
            <PlatformPartnerCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
