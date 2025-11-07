import { useEffect, useRef, useState } from "react";
import { IoMdClose, IoMdThumbsUp } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

interface ProgramData {
  title: string;
  price_tag: number;
  keys_benefit: { benefits: string; description: string | string[] }[];
  join_criteria: { criteria: string; description: string }[];
}

interface ProgramPopupProps {
  data: ProgramData;
  onClose: () => void;
}

const renderDescription = (description: string | string[]) => {
  if (Array.isArray(description)) {
    return description.map((text, i) => {
      if (text.startsWith("S$") || text.includes("PRO Will")) {
        return (
          <span key={i} className="font-bold text-button">
            {text}
          </span>
        );
      }
      return <span key={i}>{text}</span>;
    });
  }
  return <span>{description}</span>;
};

export const ProgramPopup: React.FC<ProgramPopupProps> = ({
  data,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const animationClasses = isAnimating
    ? "opacity-100 scale-100"
    : "opacity-0 scale-0";

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      {" "}
      <div
        ref={modalRef}
        className={`
            transition-all duration-500 transform 
                   ${animationClasses}
            bg-white rounded-xl max-w-7xl w-full relative transition-all duration-300 transform scale-100 overflow-x-hidden overflow-y-auto max-h-[95vh]`}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-hero-gray rounded-full text-3xl z-50 p-2 cursor-pointer duration-500 hover:scale-105 group"
          aria-label="Close modal"
        >
          <IoMdClose className="text-white duration-500 group-hover:text-button" />
        </button>

        <div className="p-8 pb-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {data.title}
            </h2>
            <div className="text-3xl font-bold text-button">
              SDG {data.price_tag}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="p-6 bg-button-secondary/30 rounded-xl">
            <h3 className="flex items-center text-xl font-semibold text-hero-gray mb-4 bg-white w-fit px-4 py-1 rounded-full">
              <IoMdThumbsUp className="mr-2" /> Key Benefits
            </h3>
            <ul className="space-y-4">
              {data.keys_benefit.map((item, i) => (
                <li key={i} className="flex items-start">
                  <img
                    src="/assets/icon/customCheck.webp"
                    alt="checkMark"
                    className="mr-3 mt-1 flex-shrink-0 text-xl w-5"
                  />
                  <div className="pr-0 sm:pr-8">
                    <p className="font-bold">{item.benefits}</p>
                    <p className="text-sm">
                      {renderDescription(item.description)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-button-secondary/30 rounded-xl">
            <h3 className="flex items-center text-xl font-semibold text-hero-gray mb-4 bg-white w-fit px-4 py-1 rounded-full">
              <IoPerson className="mr-2" /> Who Can Join
            </h3>
            <ul className="space-y-4">
              {data.join_criteria.map((item, i) => (
                <li key={i} className="flex items-start">
                  <img
                    src="/assets/icon/customCheck.webp"
                    alt="checkMark"
                    className="mr-3 mt-1 flex-shrink-0 text-xl w-5"
                  />
                  <div>
                    <p className="font-bold">{item.criteria}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
