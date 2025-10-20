import { useTranslation } from "react-i18next";
import {
  FaUserTie,
  FaChartLine,
  FaHome,
  FaMonument,
  FaHandshake,
  FaChartPie,
  FaCoins,
  FaFileContract,
} from "react-icons/fa";
import { Link } from "react-router";

const professions = [
  { icon: <FaUserTie />, name: "Insurance Agents" },
  { icon: <FaChartLine />, name: "Estate Planners" },
  { icon: <FaHome />, name: "Real Estate Agents" },
  { icon: <FaMonument />, name: "Memorial Park Agents" },
  { icon: <FaHandshake />, name: "Remisiers" },
  { icon: <FaChartPie />, name: "Investment Consultants" },
  { icon: <FaCoins />, name: "Financial Planners" },
  { icon: <FaFileContract />, name: "Will & Trust Consultants" },
];

export const JoinProgram = () => {
  const { t } = useTranslation("partnership");

  return (
    <section className="bg-[url(/assets/partnership/partnershipWave.png)] bg-cover bg-center text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          {t("Join Our Reseller Program")}
        </h2>
        <p className="mb-12 leading-relaxed text-sm md:text-base max-w-7xl mx-auto">
          {t(
            "While we welcome individuals from all professional backgrounds to our reseller program, we especially value those with relevant business relationships and customer experience. If you are in one of the following professions, we would be particularly interested in having you join our team of SmartWriters."
          )}
        </p>
        <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-x-20">
          {professions.map((prof, index) => (
            <div key={prof.name} className="flex flex-col items-center">
              <div className="bg-white text-[#960001] rounded-full h-20 w-20 lg:h-24 lg:w-24 flex items-center justify-center shadow-lg mb-4 text-2xl lg:text-3xl transition-transform duration-300 hover:scale-110">
                <img src={`/assets/partnership/${index}.svg`} alt={prof.name} />
              </div>
              <h3 className="text-sm md:text-base lg:text-xl font-bold text-center max-w-38">
                {prof.name}
              </h3>
            </div>
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

  return (
    <section className="relative bg-cover bg-center h-120 flex items-center justify-start bg-[url(/assets/partnership/partnershipTogether.webp)]">
      <div className="w-full md:w-1/2 p-8 md:pl-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          {t("Certified Smart Planner")}
        </h2>
        <p className="text-black mb-8 text-lg max-w-2xl">
          {t(
            "SmartPlanner is a certification program by SmartWills that trains advisors in modern estate planning using wills, trusts, and digital tools."
          )}
        </p>
        <Link
          to="#"
          className="mt-4 bg-button text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-start"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export const SmartWriterPortal = () => {
  const { t } = useTranslation("partnership");

  return (
    <section className="relative bg-cover bg-center h-120 flex items-center justify-end bg-[url(/assets/partnership/partnershipWrite.webp)]">
      <div className="w-full md:w-1/2 p-8 md:pl-16 flex flex-col justify-center items-end text-right">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          {t("SmartWriter Portal")}
        </h2>
        <p className="text-black mb-8 text-lg max-w-2xl">
          {t(
            "Our registered reseller (SmartWriter) can log in here to create a Will for your client, anytime and anywhere."
          )}
        </p>
        <Link
          to="#"
          className="mt-4 bg-button text-center text-white px-4 py-3 rounded-lg font-semibold md:text-lg self-end"
        >
          Login
        </Link>
      </div>
    </section>
  );
};
