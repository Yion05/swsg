import { useState } from "react";
import { resourceQuestionData } from "../../../data/componentData";
import { useTranslation } from "react-i18next";
import { download_icon, downloadData } from "../../../data/resource.download";
import { GrStatusUnknown } from "react-icons/gr";

export const QnAPage = () => {
  const [activeCategory, setActiveCategory] = useState(
    resourceQuestionData[0].questionPlan
  );
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const { t } = useTranslation("resources");

  const selectedCategory = resourceQuestionData.find(
    (data) => data.questionPlan === activeCategory
  );

  const toggleAccordion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="shadow-lg rounded-2xl py-20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-5xl font-semibold text-black mb-2">
            {t("Any Questions?")}
          </h1>
          <p className="text-lg text-black">
            {t("Quick Answers to Help You Plan")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {resourceQuestionData.map((data) => {
            const isActive = data.questionPlan === activeCategory;
            return (
              <button
                key={data.questionPlan}
                onClick={() => {
                  setActiveCategory(data.questionPlan);
                  setOpenQuestion(null);
                }}
                className={`
                  flex flex-col items-center justify-center rounded-xl py-6 px-6 text-center transition-all duration-300
                  ${
                    isActive
                      ? "bg-button-secondary shadow-md relative"
                      : "bg-button-secondary/50"
                  }
                `}
              >
                <img
                  src={data.questionSVG}
                  alt={data.questionPlan}
                  className="w-22 h-22 mb-2 object-contain"
                />

                <span className="font-semibold text-2xl leading-snug">
                  {data.questionPlan}
                </span>

                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-button-secondary"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {selectedCategory?.questions.map((item, index) => {
            const isOpen = item.question === openQuestion;
            return (
              <div
                key={index}
                className={`
                    mb-4 overflow-hidden transition-normal duration-600
                    ${index === 0 ? "mt-0" : "mt-0"}
                `}
              >
                <button
                  onClick={() => toggleAccordion(item.question)}
                  className={`
                    flex flex-col w-full p-5 bg-button-secondary/15
                    ${
                      isOpen
                        ? "transition-normal duration-600 rounded-2xl"
                        : "transition-normal duration-600 rounded-full"
                    }
                  `}
                >
                  <span className="flex justify-between items-center">
                    <p className="font-semibold text-left text-2xl">
                      {item.question}
                    </p>
                    <div
                      className={`w-0 h-0 border-l-[12px] transition-colors duration-600 border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] ${
                        isOpen ? "border-t-hero-gray" : "border-t-hero-gray/50"
                      }`}
                    ></div>
                  </span>

                  <div
                    className={`
                        overflow-hidden transition-all duration-600
                        ${isOpen ? "max-h-96 pt-4" : "max-h-0"}
                    `}
                    style={{ maxHeight: isOpen ? "999px" : "0" }}
                  >
                    <p className="text-left text-base text-hero-gray">
                      {item.answer}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-1">
            More Questions?
          </h2>
          <p className="text-lg">Contact Us for More Information</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="p-4 rounded-xl font-semibold bg-button-secondary/50 text-hero-gray placeholder-hero-gray focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="p-4 rounded-xl font-semibold bg-button-secondary/50 text-hero-gray placeholder-hero-gray focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
            />
          </div>

          <textarea
            placeholder="Your Message..."
            aria-label="Your Message"
            rows={6}
            className="p-4 rounded-xl bg-button-secondary/50 font-semibold text-hero-gray placeholder-hero-gray resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
          ></textarea>
          <button
            type="submit"
            className="mt-4 text-base font-semibold bg-button-green py-3 px-4 self-center rounded-lg text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export const DownloadHere = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-1">
            Download Here
          </h2>
          <p className="text-lg">Access our brochures & videos here</p>
        </div>

        {/* to contributor reading for the download section, you can modify the what can be download from the downloadData which linked from data/resource.download.tsx
        */}
        {
          <div className="grid md:grid-cols-2">
            {downloadData.map((data, index) => {
              const CurrentIcon =
                download_icon[data.content_type] ?? GrStatusUnknown;
              return (
                <a target="_blank" href={data.download_linK} key={index} className="flex text-nowrap items-center text-lg gap-2 bg-button-secondary/30 rounded-2xl py-2 px-5 text-start">
                  <CurrentIcon></CurrentIcon>
                  {data.content_name}
                </a>
              );
            })}
          </div>
        }
      </div>
    </section>
  );
};
