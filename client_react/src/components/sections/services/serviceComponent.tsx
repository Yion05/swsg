import { useCallback, useState } from "react";
import { PlanForYouForm } from "../../../data/serviceFormData";
import type { formChoice } from "../../../types/types";
import { RiArrowRightLine } from "react-icons/ri";
import {
  ChoiceCardQuestion,
  SelectionQuestion,
} from "../../layout/serviceForm";
import { useTranslation } from "react-i18next";
import { productServices } from "../../../data/componentData";

export const HeroBackgroundOne = () => {
  const { t } = useTranslation("service");

  return (
    <section className="bg-[url(/assets/serviceBG.webp)] h-[50vh] rounded-xl bg-cover bg-center flex flex-col items-center justify-center gap-4 mt-8">
      <h3 className="text-base bg-button-secondary/75 rounded-xl px-2 py-1 w-fit mb-4">
        {t("sect1_page_quote")}
      </h3>
      <h1 className="text-5xl text-white font-semibold">
        {t("sect1_servicePlan_h1")}
      </h1>
      <p className="text-lg text-white mb-20">{t("sect1_exp_p")}</p>
    </section>
  );
};

export const SelectRightPlan = () => {
  const { t } = useTranslation("service");

  return (
    <section className=" bg-button relative overflow-hidden text-center py-12 rounded-xl flex flex-col items-center">
      <h1 className="text-white font-semibold text-4xl md:text-5xl text-center">
        {t("hero2_h1")}
      </h1>
      <p className="text-lg text-center text-white mt-4 max-w-4xl">
        {t("hero2_p1")}
        <span className="text-text-secondary font-semibold whitespace-nowrap">
          {t("hero2_sg")}
        </span>
        {t("hero2_p2")}
        <span className="text-text-secondary font-semibold whitespace-nowrap">
          {t("hero2_nosg")}
        </span>
        {t("hero2_p3")}
      </p>
    </section>
  );
};

export const ProductSelect = () => {
  const { t } = useTranslation("service");

  return (
    <section>
      <h1 className="text-5xl font-semibold text-center">
        {t("hero3_productService")}
      </h1>
      <h3 className="text-lg text-center">{t("hero3_des")}</h3>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-8  2xl:px-78 mt-8">
        {productServices.map((data, index) => (
          <span
            className="bg-button-secondary/50 flex flex-col items-center p-4 rounded-2xl "
            key={index}
          >
            <img
              src={data.productImage}
              className="w-32 h-32"
              alt={data.productTitle}
            />
            <h1 className="text-center text-xl font-bold">
              {data.productTitle}
            </h1>
          </span>
        ))}
      </section>
    </section>
  );
};

// to contributor reading this, the function below is for the Plan For You's form;
export const PlanForYou = () => {
  const totalQuestion = PlanForYouForm.length;
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answerValue, setAnswerValue] = useState<formChoice>({
    // data value with interface-type of formChoice
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
  });

  const currentQuestionData = PlanForYouForm[currentQuestion - 1];
  const answerKey = `question_${currentQuestion}` as keyof formChoice;
  const isAnswered = answerValue[answerKey] !== "";

  const handleAnswer = useCallback(
    (value: string | boolean) => {
      setAnswerValue((prev) => ({
        ...prev,
        [answerKey]: value,
      }));
    },
    [answerKey]
  );

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion >= totalQuestion) return;

    if (!isAnswered) {
      alert("Please select an option to proceed!");
      return;
    }

    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  // to contributor reading, the form data processing and API is expected to be here in the arrow function "handleSubmit",
  // The objects and it datatype can be refer in type.ts interface "formChoice",
  // if any issue encounter in this line, issue me in github (from: skx1322);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnswered) {
      // temporary checker
      alert("Please select your final concern before submitting!");
      return;
    }
    console.log("Form Submitted with data:", answerValue); // remove this in production
  };

  const renderQuestion = () => {
    switch (currentQuestionData.question_id) {
      case "Q1":
        return (
          <ChoiceCardQuestion
            choices={currentQuestionData.choice as any}
            selectedValue={answerValue[answerKey] as string}
            onSelect={handleAnswer}
          />
        );
      case "Q2":
      case "Q3":
      case "Q4":
      case "Q5":
        return (
          <SelectionQuestion
            choices={currentQuestionData.selection_choice as any}
            selectedValue={answerValue[answerKey]}
            onSelect={handleAnswer}
          />
        );
      default:
        return <div>Question not found.</div>;
    }
  };

  return (
    <section className="flex items-start justify-center py-20 bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h3 className="bg-button-secondary/30 inline-block rounded-full px-4 py-1 mb-4">
            Personalized wills and trusts for you
          </h3>
          <h1 className="text-5xl font-semibold">
            Plan for <span className="text-button">YOU</span>
          </h1>
          <h2 className="text-xl">
            Tailored Estate Planning for Every Life Stage
          </h2>
        </div>

        <div className="bg-white p-4 sm:p-10 rounded-2xl shadow-none">
          <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-center">
            <span className="text-button mr-2 font-semibold">
              Q{currentQuestion}.
            </span>
            {currentQuestionData.question}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full">{renderQuestion()}</div>

            <div className="flex justify-center items-center mt-6 space-x-4">
              {currentQuestion > 1 && (
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="px-6 py-3 text-base font-semibold text-gray-700 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-150"
                >
                  Back
                </button>
              )}

              {currentQuestion < totalQuestion ? (
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={!isAnswered}
                  className={`flex items-center space-x-2 px-8 py-3 text-base font-semibold text-white rounded-lg transition duration-150 
                                        ${
                                          isAnswered
                                            ? "bg-button-green"
                                            : "bg-button-green/30 cursor-not-allowed"
                                        }`}
                >
                  <span>Next</span> <RiArrowRightLine className="text-lg" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isAnswered}
                  className={`flex items-center space-x-2 px-8 py-3 text-base font-semibold text-white rounded-lg transition duration-150 
                                        ${
                                          isAnswered
                                            ? "bg-[#990000] hover:bg-[#7a0000]"
                                            : "bg-red-300 cursor-not-allowed"
                                        }`}
                >
                  <span>GO!</span> <RiArrowRightLine className="text-xl" />
                </button>
              )}
            </div>

            <div className="flex space-x-2 mt-16">
              {[...Array(totalQuestion)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    index + 1 === currentQuestion
                      ? "bg-button w-3 h-3"
                      : "bg-button-secondary/30"
                  }`}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
