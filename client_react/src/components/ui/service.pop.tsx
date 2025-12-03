import { BiShoppingBag } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import type { ServicePopupProps } from "../../types/component.type";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const ServicePopup: React.FC<ServicePopupProps> = ({
  data,
  imageIndex,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { t } = useTranslation("service");

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    setIsAnimating(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClosing]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const animationClasses =
    isAnimating && !isClosing ? "opacity-100 scale-100" : "opacity-0 scale-95";

  return (
    <div
      className={`fixed px-4 md:px-16 inset-0 z-50 bg-black/25 flex items-center justify-center transition-opacity duration-500 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {" "}
      <div
        ref={modalRef}
        className={`
           transition-all duration-500 transform 
                   ${animationClasses}
          bg-white rounded-3xl max-w-[1440px] w-full max-h-[90vh] overflow-y-auto transition-all duration-300 transform scale-100`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-red-600 text-3xl z-50"
          aria-label="Close modal"
        >
          <IoMdClose />
        </button>

        <div className={``}>
          <div className="lg:hidden">
            <img
              src={`/assets/service/content/mobile/${imageIndex}.webp`}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start relative">
            <div className="w-full text-center lg:text-start lg:w-2/3 not-lg:mt-4">
              <h2 className="text-3xl md:text-5xl font-semibold xl:mt-4 pl-0 md:pl-8">
                {data.content.content_title}
              </h2>
              {data.extra_title && (
                <p className="text-lg md:text-xl">{data.extra_title}</p>
              )}
              {data.content.content_description.map((desc, i) => (
                <p
                  key={i}
                  className="mb-4 mt-2 text-base leading-relaxed px-8 text-justify"
                >
                  {desc}
                </p>
              ))}

              <span className="pb-12 flex not-lg:justify-center items-center gap-6 mt-12 lg:mt-24 px-4">
                {" "}
                <Link
                  to={"/"}
                  className="flex items-center justify-center text-lg font-semibold text-black bg-button-secondary p-2 rounded-xl"
                >
                  <BiShoppingBag className="text-2xl"></BiShoppingBag>
                </Link>
                <Link
                  to={"/"}
                  className="text-lg font-semibold py-2 bg-button-secondary px-4 rounded-xl"
                >
                  {t("talkToUs")}
                </Link>
              </span>
            </div>

            <div className="not-lg:hidden md:w-1/2 mt-6 md:mt-0 flex justify-center relative z-10 self-start">
              <img
                src={`/assets/service/content/${imageIndex}.webp`}
                alt={data.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {data.content.benefits && (
          <div className="p-8">
            <div className="bg-button text-white px-4 py-2 rounded-full inline-block font-base mb-6">
              {data.content.benefit_title}
            </div>

            <ul className="space-y-4">
              {data.content.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center">
                  <img
                    src="/assets/icon/customCheck.webp"
                    alt="checkMark"
                    className="mr-3 mt-1 flex-shrink-0 text-xl w-5"
                  />
                  <span className="text-[#404040]">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="not-lg:text-center mt-6 pt-4">{data.content.benefit_description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
