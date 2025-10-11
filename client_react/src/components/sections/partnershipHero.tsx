import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Hero = () => {
  const { t } = useTranslation("partnership");
  return (
    <section
      className="relative bg-cover bg-center h-120 flex items-center justify-center text-center bg-[url(/assets/partnership/partnershipHandshake.webp)]"
    >
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          {t("Partnership with SmartWills")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 max-w-7xl mx-auto">
          {t(
            "Consider partnering with SmartWills and discover a new avenue to increase your income."
          )}
        </p>
      </div>
    </section>
  );
};

export const ResellerProgram = () => {
  const { t } = useTranslation("partnership");

  return (
    <section className=" flex flex-col items-center">
      <div className="w-full p-8 md:pl-16 flex flex-col h-full bg-cover bg-center bg-[url(/assets/partnership/partnershipDiscuss.webp)] py-36">
        <h2 className="max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-black">
          Reseller Business Program
        </h2>
        <p className="text-left text-black mb-2 text-base lg:text-lg max-w-xl">
          {t(`Leverage our established platform through our reseller program,
          expanding your portfolio and offering enhanced services to your
          clientele.`)}
        </p>
        <Link
          to="#"
          className="mt-4 font-semibold bg-button text-center text-white px-4 py-3 rounded-lg text-base md:text-lg inline-block self-start"
        >
          {t("Contact Us Now")}
        </Link>
      </div>
    </section>
  );
};
