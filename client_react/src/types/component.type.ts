export type Choice = {
  choice_title: string;
  choice_sub?: string;
  choice_icon: string;
  value: string;
};

export type SelectionChoice = {
  choice_title: string;
  value: string | boolean;
};

export interface ChoiceCardProps {
  choices: Choice[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export interface SelectionProps {
  choices: SelectionChoice[];
  selectedValue: string | boolean;
  onSelect: (value: string | boolean) => void;
}