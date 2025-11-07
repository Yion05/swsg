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

export interface downloadStructSchema {
  content_name: string,
  content_type: "image" | "video" | "bookmark",
  download_linK: string
}

export interface contactSchema {
  type: 'Hotline' | 'WhatsApp' | "Email",
  content: string[]
}

export interface ServiceContent {
  content_title: string;
  extra_content_title?: string;
  content_description: string[];
  link: string;
  benefit_title?: string;
  benefit_description?: string;
  benefits?: string[];
}

export interface ServicePopupProps {
  data: {
    title: string;
    extra_title?: string;
    content: ServiceContent;
  };
  imageIndex: number;
  onClose: () => void;
}

export interface platformPartnerSchema {
  title: string,
  description: string,
  content: companySchema[]
}

export interface companySchema {
  company_name: string,
  company_logo: string,
  details: string[],
  link?: string,
}