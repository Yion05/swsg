

export interface hero4Slide_schema {
  titleSegment: string,
  paragraph: string,
  image: string,
  alignment: "start" | "end",
}

export interface clientReview_schema {
  client_picture: string,
  client_headline: string,
  client_feedback: string,
};
export interface accolades_schema {
  accolades_logo: string,
  accolades_title: string,
  accolades_des: string,
};

export interface nationalityData_schema {
  nationality: string,
  basicPrice: number,
  advancedPrice: number,
  currencyText: string,
}

export interface QuestionItem {
  question: string;
  answer: string;
};

export interface ResourceCategory {
  questionPlan: string;
  questionSVG: string;
  questions: QuestionItem[];
};

