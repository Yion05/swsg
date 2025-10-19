export const PlanForYouForm = [
  {
    question_id: "Q1",
    question: "Which best describes you right now?",
    choice: [
      {
        choice_title: "Single",
        choice_icon: "/assets/service/single.svg",
        value: "Single",
      },
      {
        choice_title: "Married",
        choice_sub: "(No children)",
        choice_icon: "/assets/service/married.svg",
        value: "Married but without children",
      },
      {
        choice_title: "Married",
        choice_sub: "(Have children)",

        choice_icon: "/assets/service/family.svg",
        value: "Married and have children",
      },
      {
        choice_title: "Divorced",
        choice_sub: "(Have children)",
        choice_icon: "/assets/service/divorced.svg",
        value: "Divorced and have children",
      },
      {
        choice_title: "Widowed",
        choice_icon: "/assets/service/widowed.svg",
        value: "Widowed",
      },
    ],
  },
  {
    question_id: "Q2",
    question: "Do you have children or dependents under 21 years old?",
    selection_choice: [
      {
        choice_title: "Yes, I have minor children",
        value: "Yes, I have a minor child",
      },
      {
        choice_title: "Yes, I have minor children",
        value: "Yes, I have a minor child with dependents with special needs",
      },
      {
        choice_title: "No, I do not have minor children",
        value: "No, none",
      },
    ],
  },
  {
    question_id: "Q3",
    question: "Do you provide financial support to your parents?",
    selection_choice: [
      {
        choice_title: "Yes",
        value: true,
      },
      {
        choice_title: "No",
        value: false,
      },
    ],
  },
  {
    question_id: "Q4",
    question: "Do you own or run a business?",
    selection_choice: [
      {
        choice_title: "Yes",
        value: true,
      },
      {
        choice_title: "No",
        value: false,
      },
    ],
  },
  {
    question_id: "Q5",
    question: "What is your biggest concern about the future?",
    selection_choice: [
      {
        choice_title: "I want to protect my children's future",
        value: "I want to protect my children's future",
      },
      {
        choice_title: "Other",
        value: "Other",
      },
    ],
  },
] as const;
