import { Link, useLocation } from "react-router";
import * as React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { BiShoppingBag } from "react-icons/bi";
import LanguageSwitcher from "./languageSwitch";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);
  const { t } = useTranslation("header");

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky z-50 top-0 bg-white flex justify-around items-center py-6">
      <div className={isMobileMenuOpen ? "hidden" : "block"}>
        <span className="flex items-center gap-2">
          <img
            src="/assets/logoMain1x3.png"
            alt="SmartWillLogo"
            className="h-13 w-42"
            about="Smart Will logo"
          />
        </span>
      </div>
      <div className="hidden sm:block">
        <section className="flex items-center text-lg gap-2 sm:gap-4">
          {headerData.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              className={`
                px-4
                transform
                transition
                duration-500
                ease-in-out
                hover:scale-105
                hover:text-black
                ${
                  location.pathname === data.link
                    ? "font-semibold"
                    : ""
                }
              `}
            >
              {data.title}
            </Link>
          ))}
        </section>
      </div>

      <div className="flex items-center gap-2">
        <BiShoppingBag className="text-2xl"></BiShoppingBag>
        <LanguageSwitcher></LanguageSwitcher>
        <button className="text-base p-2 gap-2 rounded-sm bg-button text-white font-semibold">{t("login")}</button>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? "hidden" : "block"}`}>
        <FaAlignJustify
          className="text-xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* {isMobileMenuOpen && (
        <div className="w-full p-2">
          <div className="w-full flex justify-end">
            <FaAlignJustify
              className="text-xl cursor-pointer rotate-90 transform transition duration-300"
              onClick={closeMobileMenu}
            />
          </div>
          <section className="flex flex-col text-2xl gap-2 items-center">
            {headerData.map((data, index) => (
              <Link
                to={data.link}
                key={index}
                className={`
                  text-center
                  py-4
                  ${
                    location.pathname === data.link
                      ? "text-black"
                      : "text-gray-700"
                  }
                `}
                onClick={closeMobileMenu}
              >
                {data.title}
              </Link>
            ))}
          </section>
        </div>
      )} */}
    </header>
  );
};

export default Header;
