import { Link } from "react-router";
import { footerNav } from "../data/footerComponent";

const Footer = () => {
  return (
    <footer className="text-white px-4 sm:px-16 lg:px-36 mt-12">
      <div className="bg-[url('/assets/footer/SWSGFooterBG.webp')] bg-cover bg-center rounded-lg">
        <section className="flex flex-col items-center xl:ml-48 px-12 py-6">
          <div className="flex flex-col items-center w-full md:w-1/5 mb-4">
            <h1 className="text-2xl font-bold mb-1 text-nowrap">
              MY SMARTWILLS PTE LTD
            </h1>
            <p className="text-sm font-light text-nowrap">
              (UEN No. 202231612H)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 w-full md:w-4/5 md:pl-8">
            {footerNav.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h4 className="text-base font-bold mb-2 uppercase text-text-secondary">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.pages.map((page) => (
                    <li key={page.page_name}>
                      <Link
                        to={page.link}
                        className="text-sm font-normal text-white/90 hover:text-white transition-colors"
                      >
                        {page.page_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center md:items-end border-b-12 border-[#600D11] px-24">
          <div className="order-2 md:order-1 mt-6 md:mt-0">
            <img
              src="/assets/footer/SWSGFooterElement1.webp"
              alt="footer_singapore"
              className="h-24 w-auto"
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center md:items-end text-center md:text-right mb-4">
            <img
              src="/assets/footer/SWSGFooterElement2.webp"
              alt="footer_ISO + slogan"
              className="h-16 w-auto"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
