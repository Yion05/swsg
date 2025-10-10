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
    <section className="bg-gradient-to-r from-[#960001] to-[#7a0001] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          {t("Join Our Reseller Program")}
        </h2>
        <p className="mb-12 leading-relaxed text-sm md:text-base max-w-4xl mx-auto">
          {t(
            "While we welcome individuals from all professional backgrounds to our reseller program, we especially value those with relevant business relationships and customer experience. If you are in one of the following professions, we would be particularly interested in having you join our team of SmartWriters."
          )}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          {professions.map((prof) => (
            <div key={prof.name} className="flex flex-col items-center">
              <div className="bg-white text-[#960001] rounded-full h-20 w-20 lg:h-24 lg:w-24 flex items-center justify-center shadow-lg mb-4 text-2xl lg:text-3xl transition-transform duration-300 hover:scale-110">
                {prof.icon}
              </div>
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-center">
                {prof.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Link
            to="#"
            className="bg-text-secondary text-center text-[#960001] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-base md:text-lg hover:-translate-y-0.5 hover:shadow-lg inline-block"
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
    <section className="bg-white flex flex-col md:flex-row items-center min-h-[450px]">
      <div className="w-full md:w-1/2 p-8 md:pl-16 flex flex-col justify-center order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          {t("Certified Smart Planner")}
        </h2>
        <p className="text-black mb-8 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl">
          {t(
            "SmartPlanner is a certification program by SmartWills that trains advisors in modern estate planning using wills, trusts, and digital tools."
          )}
        </p>
        <Link
          to="#"
          className="mt-4 bg-[#960001] text-center text-white px-6 py-3 rounded-lg hover:bg-[#7a0001] transition-all duration-300 text-base md:text-lg hover:-translate-y-0.5 hover:shadow-lg inline-block self-start"
        >
          Login
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-80 md:h-[450px] order-1 md:order-2">
        <div
          className="w-full h-full bg-cover bg-center [clip-path:ellipse(150%_100%_at_100%_50%)] md:[clip-path:ellipse(100%_100%_at_100%_50%)]"
          style={{
            backgroundImage:
              "url('https://www.makemyassignments.com/blog/wp-content/uploads/2022/03/group-discussion-istock-603992138-935358-1609832067.jpg')",
          }}
        ></div>
      </div>
    </section>
  );
};

export const SmartWriterPortal = () => {
  const { t } = useTranslation("partnership");

  return (
    <section className="bg-white flex flex-col md:flex-row-reverse items-center min-h-[450px]">
      <div className="w-full md:w-1/2 p-8 md:pr-16 flex flex-col justify-center items-start md:items-end order-2 md:order-2">
        <div className="text-left md:text-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-black">
            {t("SmartWriter Portal")}
          </h2>
          <p className="text-black mb-8 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl ml-auto">
            {t(
              "Our registered reseller (SmartWriter) can log in here to create a Will for your client, anytime and anywhere."
            )}
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-center bg-[#960001] text-white px-6 py-3 rounded-lg hover:bg-[#7a0001] transition-all duration-300 text-base md:text-lg hover:-translate-y-0.5 hover:shadow-lg"
          >
            Login
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-80 md:h-[450px] order-1 md:order-1">
        <div
          className="w-full h-full bg-cover bg-center scale-x-[-1] [clip-path:ellipse(150%_100%_at_0%_50%)] md:[clip-path:ellipse(100%_100%_at_100%_50%)]"
          style={{
            backgroundImage:
              "url('https://c0.wallpaperflare.com/preview/583/653/138/business-laptop-office-computer.jpg')",
          }}
        ></div>
      </div>
    </section>
  );
};
