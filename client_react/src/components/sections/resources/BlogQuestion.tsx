import { useRef } from "react";

interface QuestionItemProps {
  item: { question: string; answer: string | string[]; image?: string };
  isOpen: boolean;
  toggleAccordion: (question: string) => void;
}

export const BlogItem: React.FC<QuestionItemProps> = ({
  item,
  isOpen,
  toggleAccordion,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const blogItem = item.answer as string[];

  return (
    <div
      className={`mb-4 transition-all duration-500 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
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
          className={`transition-all duration-500 ease-in-out overflow-y-hidden grid grid-cols-3`}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
            paddingTop: isOpen ? "" : "0",
          }}
        >
          <span className="col-span-2">
            {blogItem.map((data, index) => (
              <p
                className="text-base text-hero-gray text-justify"
                aria-label="Blog-Item"
                key={index}
              >
                {data}
              </p>
            ))}
          </span>
          <img className="col-span-1" src={item.image} alt={item.question} />
        </div>
      </button>
    </div>
  );
};
