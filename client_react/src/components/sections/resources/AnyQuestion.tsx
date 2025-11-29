import { useTranslation } from "react-i18next";
import { resourceQuestionData } from "../../../data/componentData";
import { useEffect, useRef, useState } from "react";

interface QuestionItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  toggleAccordion: (question: string) => void;
}

const QuestionAccordionItem: React.FC<QuestionItemProps> = ({
  item,
  isOpen,
  toggleAccordion,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`mb-4 transition-all duration-500`}>
      <button
        onClick={() => toggleAccordion(item.question)}
        className={`
          flex flex-col w-full p-5 bg-button-secondary/15 transition-all duration-500 hover:bg-button-secondary/30 rounded-2xl cursor-pointer
        `}
      >
        <span className="flex justify-between items-center">
          <p className="font-semibold text-left text-xl sm:text-2xl text-black">
            {item.question}
          </p>
          <div
            className={`
              w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] 
              transition-transform duration-500 transform
              ${
                isOpen
                  ? "border-t-hero-gray rotate-180"
                  : "border-t-hero-gray/50"
              }
            `}
          ></div>
        </span>

        <div
          ref={contentRef}
          className={`transition-all duration-500 ease-in-out overflow-y-hidden`}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
            paddingTop: isOpen ? "" : "0",
          }}
        >
          <p className="text-left text-base text-hero-gray">{item.answer}</p>
        </div>
      </button>
    </div>
  );
};

export const QnAPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const [qaContentMaxHeight, setQaContentMaxHeight] = useState(0);
  const { t } = useTranslation("resources");

  const qaContentRef = useRef<HTMLDivElement>(null);

  const selectedCategory = resourceQuestionData.find(
    (data) => data.questionPlan === activeCategory
  );

  const toggleAccordion = (question: string) => {
    setOpenQuestions((prevOpenQuestions) => {
      if (prevOpenQuestions.includes(question)) {
        return prevOpenQuestions.filter((q) => q !== question);
      } else {
        return [...prevOpenQuestions, question];
      }
    });
  };

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setQaContentMaxHeight(0);
      setTimeout(() => {
        setActiveCategory("");
      }, 500);
    } else {
      setActiveCategory(categoryName);
      setQaContentMaxHeight(0);
    }
    setOpenQuestions([]);
  };

  useEffect(() => {
    if (activeCategory && qaContentRef.current) {
      setQaContentMaxHeight(qaContentRef.current.scrollHeight);
    }
  }, [activeCategory, selectedCategory]);

  return (
    <section className="shadow-lg rounded-2xl py-12 pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-5xl font-semibold text-black mb-2">
            {t("Any Questions?")}
          </h1>
          <p className="text-lg text-black">
            {t("Quick Answers to Help You Plan")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {resourceQuestionData.map((data) => {
            const isActive = data.questionPlan === activeCategory;
            return (
              <button
                key={data.questionPlan}
                onClick={() => handleCategoryClick(data.questionPlan)}
                className={`
                  flex flex-col items-center justify-center rounded-xl py-6 px-6 text-center transition-all duration-300 ease-out cursor-pointer
                  ${
                    isActive
                      ? "bg-button-secondary shadow-lg relative"
                      : "bg-button-secondary/40 hover:bg-button-secondary/50"
                  }
                `}
              >
                <img
                  src={data.questionSVG}
                  alt={data.questionPlan}
                  className="w-22 h-22 mb-2 object-contain"
                />

                <span className="font-semibold text-2xl leading-snug text-black">
                  {data.questionPlan}
                </span>

                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-button-secondary"></div>
                )}
              </button>
            );
          })}
        </div>

        <div
          className={`mt-8 transition-all duration-500 ease-out`}
          style={{ maxHeight: `${qaContentMaxHeight}px` }}
        >
          <div
            ref={qaContentRef}
            className={`${
              activeCategory
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            } transition-all duration-500 ease-out`}
          >
            {activeCategory &&
              selectedCategory?.questions.map((item, index) => {
                const isOpen = openQuestions.includes(item.question);
                return (
                  <QuestionAccordionItem
                    key={index}
                    item={item}
                    isOpen={isOpen}
                    toggleAccordion={toggleAccordion}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
