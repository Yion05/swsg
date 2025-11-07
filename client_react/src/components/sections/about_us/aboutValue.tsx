import { useTranslation } from "react-i18next";

const values = [
  {
    title: "CUSTOMER-CENTRIC",
    description: "Designing and offering a platform with the end users in mind",
    assets_loc: `/assets/about/customer_cent.webp`
  },
  {
    title: "SHAREHOLDER-FOCUSED",
    description:
      "SmartWills made what seemed like a daunting task both simple and respectful. I'm relieved to have my affairs in order for my loved ones.",
      assets_loc: `/assets/about/shareholder.webp`
  },
  {
    title: "SUSTAINABLE",
    description:
      "Prioritizing the environment, society and good governance in our business operations.",
      assets_loc: `/assets/about/sustainable.webp`
  },
];

export const OurValue = () => {
  const { t } = useTranslation("about");
  return (
    <section className="py-8 px-4 bg-white flex flex-col items-center justify-center text-center">
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
              <div className="w-25 h-25 p-4 bg-button-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={value.assets_loc} alt={value.assets_loc} />
              </div>
              <h3 className="font-bold text-button mb-2 text-lg">
                {t(value.title)}
              </h3>
              <p className="text-black text-base ">
                {t(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
