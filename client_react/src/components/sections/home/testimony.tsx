import { useTranslation } from "react-i18next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import type { clientReview_schema } from "../../../types/types";
import useLazyLoad from "../../../hook/useLazyLoad";

const TestimonyHero = () => {
  const { t } = useTranslation("home");
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-500 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  const staticData: clientReview_schema[] = [
    {
      client_picture: "/assets/defaultClient.png",
      client_headline: "Reassurance",
      client_feedback: `Creating my Will with SmartWills was a seamless experience. It’s given me immense peace of mind knowing my family’s future is secure.`,
    },
    {
      client_picture: "/assets/defaultClient.png",
      client_headline: "Confidence",
      client_feedback: `The process was straightforward and the staff were incredibly supportive. I now feel confident that my wishes will be honored.`,
    },
    {
      client_picture: "/assets/defaultClient.png",
      client_headline: "Relief",
      client_feedback: `SmartWills made what seemed like a daunting task both simple and respectful. I’m relieved to have my affairs in order for my loved ones.`,
    },
  ];

  return (
    <div className={`flex flex-col items-center py-10 ${slideFromTopAnimation}`} ref={sectionRef}>
      <h1 className="text-4xl font-bold mb-2">{t("ourReview")}</h1>
      <h3 className="text-lg mb-10">{t("clientReview")}</h3>

      <div className="w-full max-w-8xl mx-auto flex relative items-center justify-center">
        <IoMdArrowDropleft className="text-5xl absolute -left-0 z-20 text-secondary cursor-pointer top-1/2 -translate-y-1/2" />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mx-auto px-4 sm:px-8 lg:px-28 gap-8 lg:gap-12">
          {staticData.map((client_res, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center bg-button-secondary/30 rounded-2xl p-8 h-full"
            >
              <span className="p-4 rounded-full bg-button-secondary">
                <img
                  className="w-12 h-12 object-contain"
                  src={client_res.client_picture}
                  alt={client_res.client_headline}
                />
              </span>
              <h3 className="text-main text-xl font-semibold mt-2 mb-2">
                {client_res.client_headline}
              </h3>
              <p className="flex-grow">{client_res.client_feedback}</p>
            </div>
          ))}
        </section>

        <IoMdArrowDropright className="text-5xl absolute -right-0 -20 text-secondary cursor-pointer top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default TestimonyHero;
