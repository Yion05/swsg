import { useTranslation } from "react-i18next";

const values = [
  {
    title: "CUSTOMER-CENTRIC",
    description: "Designing and offering a platform with the end users in mind",
  },
  {
    title: "SHAREHOLDER-FOCUSED",
    description:
      "SmartWills made what seemed like a daunting task both simple and respectful. I'm relieved to have my affairs in order for my loved ones.",
  },
  {
    title: "SUSTAINABLE",
    description:
      "Prioritizing the environment, society and good governance in our business operations.",
  },
];

export const OurValue = () => {
  const { t } = useTranslation("about");
  return (
    <section className="py-16 px-4 bg-white flex flex-col items-center justify-center text-center">
      <div className="max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
          {t("Our Value")}
        </h2>
        <h3 className="text-black text-sm md:text-base lg:text-xl">
          {t("Simple, Secure and Affordable Digital Estate Planning")}
        </h3>
        <p className="text-black mb-10 text-sm md:text-base lg:text-xl">
          {t("Making Will-writing and Legacy Management")}{" "}
          <span className="font-semibold text-button">
            {t('FASTER, SMARTER AND MORE ACCESSIBLE.')}
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-button-secondary/30 rounded-2xl p-6"
            >
              <div className="w-25 h-25 bg-button-secondary rounded-full mx-auto mb-4 flex items-center justify-center"></div>
              <h3 className="font-bold text-button mb-2 text-lg">
                {t(value.title)}
              </h3>
              <p className="text-black text-base">
                {t(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  { name: "DYLAN NG", role: "Founder & Group CEO", avatar: "" },
  { name: "ZELOS NG", role: "Co-Founder & Group CTO", avatar: "" },
  { name: "FIONA LEE", role: "Group VP Finance", avatar: "" },
];

export const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-white flex flex-col items-center justify-center text-center">
      <div className="max-w-7xl flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
          Meet Our Team
        </h2>
        <p className="font-semibold text-button text-base lg:text-xl">
          Professional Minds Behind Every Smart Decision
        </p>
        <p className="text-center text-base lg:text-xl max-w-7xl">
          Our professional team combines legal expertise and smart technology to protect your legacy with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className=" bg-button-secondary/30 rounded-2xl p-6 flex flex-col justify-end relative"
            >
              <div className="px-2 flex flex-col items-center">
                <img src={member.avatar} className="w-48 h-48" alt={member.name} />
                <h3 className="text-button font-semibold text-base md:text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-black text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
