import type { ChoiceCardProps, SelectionProps } from "../../types/component.type";

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

          <p className=" text-xl font-bold">{choice.choice_title}</p>
          {choice.choice_sub && (
            <p className="font-bold text-base text-nowrap mt-1">
              {choice.choice_sub}
            </p>
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
    <div className="relative mx-auto w-full flex flex-col items-center">
      <select
        value={selectedValue.toString()}
        onChange={handleSelect}
        className="appearance-none w-5xl py-3 text-center text-lg font-medium rounded-xl bg-button-secondary/30 cursor-pointer"
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

      <div
        className={`absolute right-18 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px]`}
      ></div>

      {selectedValue !== "" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-lg">{selectedTitle}</span>
        </div>
      )}
    </div>
  );
};
