import { download_icon, downloadData } from "../../../data/resource.download";
import { GrStatusUnknown } from "react-icons/gr";


export const ContactForm = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-1">
            More Questions?
          </h2>
          <p className="text-lg">Contact Us for More Information</p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

export const DownloadHere = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-1">
            Download Here
          </h2>
          <p className="text-lg">Access our brochures & videos here</p>
        </div>

        {/* to contributor reading for the download section, you can modify the what can be download from the downloadData which linked from data/resource.download.tsx
        */}
        {
          <div className="grid md:grid-cols-2">
            {downloadData.map((data, index) => {
              const CurrentIcon =
                download_icon[data.content_type] ?? GrStatusUnknown;
              return (
                <a target="_blank" href={data.download_linK} key={index} className="flex text-nowrap items-center text-lg gap-2 bg-button-secondary/30 rounded-2xl py-2 px-5 text-start">
                  <CurrentIcon></CurrentIcon>
                  {data.content_name}
                </a>
              );
            })}
          </div>
        }
      </div>
    </section>
  );
};
