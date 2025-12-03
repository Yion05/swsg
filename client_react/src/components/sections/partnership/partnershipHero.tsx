import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "../../../index.css";

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
      <div className="xl:hidden w-full mb-4">
        <img
          src={`./assets/partnership/mobile/1.webp`}
          alt={"Reseller Program Image"}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full p-8 md:pl-16 flex not-xl:items-center flex-col h-full bg-cover bg-center  bg-[url(/assets/partnership/partnershipDiscuss.webp)] py-12 xl:py-36 lg-no-bg">
        <h2 className="not-xl:text-center max-w-[30rem] text-3xl lg:text-4xl font-semibold mb-2 text-black">
          Reseller Business Program
        </h2>
        <p className="not-xl:text-center text-left text-black mb-2 text-sm lg:text-base max-w-[28rem]">
          {t(`Leverage our established platform through our reseller program,
          expanding your portfolio and offering enhanced services to your
          clientele.`)}
        </p>
        <Link
          to="#"
          className="not-xl:self-center not-xl:text-center mt-4 font-semibold bg-button text-center text-white px-4 py-3 rounded-lg text-base md:text-lg inline-block self-start"
        >
          {t("Contact Us Now")}
        </Link>
      </div>
    </section>
  );
};
