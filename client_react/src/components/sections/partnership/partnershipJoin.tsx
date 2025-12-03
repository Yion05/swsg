import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ProgramPopup } from "./partnershipPop";
import { useState } from "react";
import { CSPSData, SmartWriterData } from "../../../data/partnership.reseller";
import "../../../index.css";

const resellerProgram = [
  {
    title: "SmartWriter",
    description: `Affiliate Program to Earn Income by Assisting in Will Preparation`,
  },
  {
    title: "Certified Smart Planner (CSPS)",
    description: `Cross-Border Estate Planning Business Opportunity`,
  },
];

export const JoinProgram = () => {
  const { t } = useTranslation("partnership");

  return (
    <section className="bg-[url(/assets/partnership/partnershipWave.png)] bg-cover bg-center text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          <span className="text-text-secondary">{t("Join ")}</span>
          {t("Our Reseller Program")}
        </h2>
        <p className="mb-12 leading-relaxed text-sm md:text-base max-w-7xl mx-auto">
          {t(
            "While we welcome individuals from all professional backgrounds to our reseller program, we especially value those with relevant business relationships and customer experience. If you are in one of the following professions, we would be particularly interested in having you join our team of SmartWriters."
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resellerProgram.map((data, index) => (
            <span
              key={index}
              className={` ${
                index % 2 ? "border-l-2 border-text-secondary" : ""
              } px-4`}
            >
              <h1 className="font-bold text-3xl text-text-secondary text-wrap lg:text-nowrap text-center mb-4">
                {data.title}
              </h1>
              <p className="font-medium text-2xl text-center">
                {data.description}
              </p>
            </span>
          ))}
        </div>
        <div className="mt-14">
          <Link
            to="#"
            className="bg-text-secondary text-center text-element-one font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-base md:text-lg hover:-translate-y-0.5 hover:shadow-lg inline-block"
          >
            {t("Contact Us Now")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export const CertifiedPlanner = () => {
  const { t } = useTranslation("partnership");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section className="relative bg-cover bg-center flex flex-col xl:flex-row h-auto xl:h-120  items-center justify-start lg-no-bg bg-[url(/assets/partnership/partnershipTogether.webp)] ">
        <div className=" xl:hidden w-full mb-4">
          <img
            src={`./assets/partnership/mobile/2.webp`}
            alt={"Reseller Program Image"}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full p-8 md:pl-16 flex flex-col justify-center not-xl:items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black not-xl:text-center">
            {t("Certified Smart Planner")}
          </h2>
          <p className="text-black mb-8 text-sm lg:text-base max-w-2xl not-xl:text-center">
            {t(
              "SmartPlanner is a certification program by SmartWills that trains advisors in modern estate planning using wills, trusts, and digital tools."
            )}
          </p>
          <div className="flex flex-shrink flex-col not-xl:self-center md:flex-row gap-2 md:gap-4">
            <Link
              to="#"
              className="not-md:self-center mt-2 md:mt-4 text-nowrap bg-button text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Login
            </Link>
            <Link
              to="#"
              className="not-md:self-center mt-2 md:mt-4 text-nowrap bg-element-one text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Register Now
            </Link>
            <button
              onClick={openPopup}
              className="not-md:self-center mt-2 md:mt-4 text-nowrap bg-button-secondary text-center px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Know More
            </button>
          </div>
        </div>
      </section>

      {isPopupOpen && (
        <ProgramPopup data={CSPSData as any} onClose={closePopup} />
      )}
    </>
  );
};

export const SmartWriterPortal = () => {
  const { t } = useTranslation("partnership");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <section className="relative bg-cover bg-center flex flex-col xl:flex-row h-auto xl:h-120  items-center justify-end  bg-[url(/assets/partnership/partnershipWrite.webp)] lg-no-bg">
        <div className=" xl:hidden w-full mb-4">
          <img
            src={`./assets/partnership/mobile/3.webp`}
            alt={"Reseller Program Image"}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8 md:pl-16 flex flex-col justify-center items-center xl:items-end text-center xl:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black">
            {t("SmartWriter Portal")}
          </h2>
          <p className="text-black mb-8 text-lg max-w-2xl">
            {t(
              "Our registered reseller (SmartWriter) can log in here to create a Will for your client, anytime and anywhere."
            )}
          </p>
          <div className="flex flex-shrink flex-col not-xl:self-center md:flex-row gap-2 md:gap-4">
            <Link
              to="#"
              className="not-md:self-center text-nowrap bg-button text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Login
            </Link>

            <Link
              to="#"
              className="not-md:self-center text-nowrap bg-element-one text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Register Now
            </Link>

            <button
              onClick={openPopup}
              className="not-md:self-center text-nowrap bg-button-secondary text-center px-4 py-3 rounded-lg font-semibold md:text-lg self-start cursor-pointer duration-500 hover:-translate-y-2"
            >
              Know More
            </button>
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <ProgramPopup data={SmartWriterData as any} onClose={closePopup} />
      )}
    </>
  );
};
