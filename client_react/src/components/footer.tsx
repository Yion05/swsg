import { InfoHero } from "./sections/home/homeHero";

const Footer = () => {
  return (
    <footer className="text-white px-4 sm:px-16 lg:px-24 mt-12 mx-auto">
      <div className="bg-[url('/assets/footer/SWSGFooterBG.webp')] bg-cover bg-no-repeat bg-center rounded-lg">
        <section className="flex flex-col items-center xl:ml-48 px-12 py-6">
          <div className="flex flex-col items-center w-full md:w-1/5 mb-4">
            <h1 className="text-2xl font-bold mb-1 text-nowrap">
              MY SMARTWILLS PTE LTD
            </h1>
            <p className="text-sm font-light text-nowrap">
              (UEN No. 202231612H)
            </p>
          </div>

          <InfoHero></InfoHero>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center md:items-end border-b-12 border-[#600D11] px-2 md:px-24">
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
