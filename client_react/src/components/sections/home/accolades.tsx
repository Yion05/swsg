import { useTranslation } from "react-i18next";
import useLazyLoad from "../../../hook/useLazyLoad";

const AccoladesHero = () => {
  const { t } = useTranslation("home");
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-500 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  const renderDescription = (key: string) => {
    const part1 = t(`${key}_part1`) || t(key);
    const highlight = t(`${key}_highlight`);
    const part2 = t(`${key}_part2`);

    if (highlight) {
      return (
        <>
          {part1}
          <span className="text-main font-semibold">
            {highlight}
          </span>
          {part2}
        </>
      );
    }
    return part1;
  };

  return (
    <section
      className={`shadow-lg rounded-2xl w-full py-16 ${slideFromTopAnimation}`}
      ref={sectionRef}
    >
      <div className="flex flex-col items-center text-center max-w-full mx-auto gap-4">
        <h1 className="font-semibold text-3xl sm:text-4xl">
          {t("1.6.1_title")}
        </h1>
        <p className="text-base sm:text-lg">{t("1.6.2_title")}</p>

        <div className="flex relative items-center justify-center w-full py-8">
          <div className="flex flex-col items-center text-center w-full max-w-7xl px-6 md:px-12 lg:px-24 opacity-100 transition-opacity duration-500 ease-in-out">
            <img
              src="/assets/accolades/ISO.webp"
              alt="Quality Management System, IAF, ACB 060"
              className="w-48 sm:w-96 h-auto object-contain mb-12"
            />

            <h3 className="font-semibold text-xl mb-2">{t("1.6.3_title")}</h3>

            <p className="text-sm sm:text-base max-w-7xl">
              {renderDescription("1.6.4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccoladesHero;
