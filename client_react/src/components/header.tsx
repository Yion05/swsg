import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./languageSwitch";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation("header");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const headerData = [
    {
      title: t("home"),
      link: "/",
    },
    {
      title: t("servicePlan"),
      link: "/service",
    },
    {
      title: t("aboutUs"),
      link: "/about",
    },
    {
      title: t("resources"),
      link: "/resources",
    },
    {
      title: t("partnership"),
      link: "/partnership",
    },
    {
      title: t("contactUs"),
      link: "/contact",
    },
  ];

  return (
    <header
      ref={mobileMenuRef}
      className="w-full px-0 sm:px-16 lg:px-36  bg-white shadow-sm fixed top-0 z-50 py-2"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <img
          src="/assets/logoMain1x3.png"
          alt="SmartWills"
          className="h-8 md:h-12 w-auto"
        />

        <nav className="hidden xl:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8 text-[#404040]">
            {headerData.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  className={`transition-colors text-base text-nowrap ${
                    location.pathname === data.link ? "font-semibold" : ""
                  }`}
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-1">
          <button className="p-2 rounded">
            <svg
              className="w-6 h-6 text-[#404040]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>

          <LanguageSwitcher></LanguageSwitcher>

          <button className="bg-[#960001] text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
            Login
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-md text-gray-600 hover:text-[#960001] hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`
    lg:hidden bg-white shadow-lg border-t 
    transition-all duration-500 ease-out 
    absolute top-full left-0 w-full z-50 
        ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : " opacity-0 invisible pointer-events-none"
        } 
  `}
      >
        <ul className="py-4 px-6 space-y-4 text-gray-800 text-lg font-medium">
          {headerData.map((data, index) => (
            <li key={index}>
              <Link
                to={data.link}
                className={`text-center block py-2 transition-colors duration-300 ${
                  location.pathname === data.title ? "font-semib-old" : ""
                }`}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
