import { useCallback, useState } from "react";
import { PlanForYouForm } from "../../data/serviceFormData";
import type { formChoice } from "../../types/types";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type Choice = {
  choice_title: string;
  choice_sub?: string;
  choice_icon: string;
  value: string;
};

type SelectionChoice = {
  choice_title: string;
  value: string | boolean;
};

interface ChoiceCardProps {
  choices: Choice[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

interface SelectionProps {
  choices: SelectionChoice[];
  selectedValue: string | boolean;
  onSelect: (value: string | boolean) => void;
}

export const ChoiceCardQuestion: React.FC<ChoiceCardProps> = ({
  choices,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
      {choices.map((choice) => (
        <button 
          key={choice.value}
          onClick={() => onSelect(choice.value)}
          className={`
            flex flex-col items-center justify-center rounded-xl text-center p-6
            ${
              selectedValue === choice.value
                ? " bg-button-secondary"
                : " bg-button-secondary/30 "
            }
          `}
        >
          <img
            src={choice.choice_icon}
            alt={choice.choice_title}
            className="w-20 h-20 mb-3 object-contain"
          />

          <p className=" text-gray-800 text-xl font-bold">
            {choice.choice_title}
          </p>
          {choice.choice_sub && (
            <p className="font-bold text-base text-nowrap mt-1">{choice.choice_sub}</p>
          )}
        </button>
      ))}
    </div>
  );
};

export const SelectionQuestion: React.FC<SelectionProps> = ({
  choices,
  selectedValue,
  onSelect,
}) => {
  const selectedTitle =
    choices.find((c) => c.value === selectedValue)?.choice_title ||
    choices[0].choice_title;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChoice = choices.find(
      (c) => c.value.toString() === e.target.value
    );
    if (selectedChoice) {
      onSelect(selectedChoice.value);
    }
  };

  return (
    <div className="relative mx-auto w-full">
      <select
        value={selectedValue.toString()}
        onChange={handleSelect}
        className="appearance-none w-full px-8 py-5 text-lg font-medium text-gray-700 rounded-xl bg-gray-100 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-red-300 transition-shadow cursor-pointer"
      >
        <option value="" disabled>
          Select an Option
        </option>
        {choices.map((choice) => (
          <option key={choice.choice_title} value={choice.value.toString()}>
            {choice.choice_title}
          </option>
        ))}
      </select>

      <IoIosArrowDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none text-xl" />

      {selectedValue !== "" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-medium text-gray-800">
            {selectedTitle}
          </span>
        </div>
      )}
    </div>
  );
};

export const PlanForYou = () => {
  const totalQuestion = PlanForYouForm.length;
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answerValue, setAnswerValue] = useState<formChoice>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnswered) {
      alert("Please select your final concern before submitting!");
      return;
    }
    console.log("Form Submitted with data:", answerValue);
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
    <section className="min-h-screen flex items-start justify-center py-20 bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h3 className="bg-button-secondary/30 inline-block rounded-full px-4 py-1 mb-4">
            Personalized wills and trusts for you
          </h3>
          <h1 className="text-5xl font-semibold text-gray-900">
            Plan for <span className="text-button">YOU</span>
          </h1>
          <h2 className="text-xl">
            Tailored Estate Planning for Every Life Stage
          </h2>
        </div>

        <div className="bg-white p-4 sm:p-10 rounded-2xl shadow-none">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6 text-center">
            <span className="text-button mr-2 font-semibold">Q{currentQuestion}.</span>
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
                                            ? "bg-red-700 hover:bg-red-800"
                                            : "bg-red-300 cursor-not-allowed"
                                        }`}
                >
                  <span>Next</span> <IoIosArrowForward className="text-lg" />
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
                  <span>GO!</span> <IoIosArrowForward className="text-lg" />
                </button>
              )}
            </div>

            <div className="flex space-x-2 mt-16">
              {[...Array(totalQuestion)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    index + 1 === currentQuestion
                      ? "bg-red-700 w-3 h-3"
                      : "bg-gray-300"
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
