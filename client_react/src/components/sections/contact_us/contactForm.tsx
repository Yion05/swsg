import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation("contact");

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl grid md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="text-start mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-1 text-button">
            {t("Get In Touch")}{" "}
            <span className="text-black">{t("With Us")}</span>
          </h2>
          <p className="text-lg">
            {t("Have a question about your will or estate planning?")}
          </p>
          <p className="text-lg">
            {t("Our friendly team is here to help you every step of the way.")}
          </p>
          <p className="text-lg mt-4">
            {t("Send us a message — We’ll be happy to assist.")}
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="p-4 rounded-xl font-semibold bg-button-secondary/50 text-hero-gray placeholder-hero-gray focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="p-4 rounded-xl font-semibold bg-button-secondary/50 text-hero-gray placeholder-hero-gray focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
            />
          </div>

          <textarea
            placeholder="Your Message..."
            aria-label="Your Message"
            rows={6}
            className="p-4 rounded-xl bg-button-secondary/50 font-semibold text-hero-gray placeholder-hero-gray resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-150"
          ></textarea>
          <button
            type="submit"
            className="mt-4 text-base font-semibold bg-button-green py-3 px-4 self-center rounded-lg text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
