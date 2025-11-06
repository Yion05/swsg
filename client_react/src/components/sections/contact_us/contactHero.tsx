import type React from "react";
import { useTranslation } from "react-i18next";
import { contactData, contactIconMap } from "../../../data/contact.data";

export const ContactBG = () => {
  const { t } = useTranslation("contact");
  return (
    <section className="relative bg-cover bg-center h-120 flex items-center justify-center text-center bg-[url(/assets/contact_us/contact_1.webp)]">
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 text-black px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          {t("Contact Us")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 max-w-7xl mx-auto">
          {t(
            "You can contact us via a phone call, an email or send us your enquiry form, and we will connect you soon!"
          )}
        </p>
      </div>
    </section>
  );
};

interface addressSchema {
  address: string;
}

export const GoogleMap: React.FC<addressSchema> = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);

  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="w-full h-full min-h-[155px] lg:min-h-full overflow-hidden rounded-lg">
      <iframe
        title="Office"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        className="border-0"
      />
    </div>
  );
};

export const ContactHero = () => {
  const { t } = useTranslation("contact");
  const location = "1 N Bridge Rd, #18-06, Singapore 179094";

  return (
    <section className="relative bg-cover py-8 bg-center flex flex-col gap-12 md:gap-0 md:flex-row px-8 items-center justify-around text-center bg-button">
      <section className="w-full md:w-2/3 grid gap-2 lg:grid-cols-3 items-center">
        {contactData.map((data, index) => {
          const IconData = contactIconMap[data.type];

          return (
            <div
              key={index}
              className="text-white flex flex-col items-center"
            >
              <span className="bg-white rounded-full p-2 mb-2">
                <IconData className="text-center text-hero-gray text-3xl"></IconData>
              </span>
              {data.content.map((data) => (
                <p key={data} title={data} className="text-wrap md:text-nowrap text-sm">
                  {data}
                </p>
              ))}
            </div>
          );
        })}
      </section>
      <section className="w-full md:w-1/3 flex flex-col gap-2 items-center">
        <div className="">
          <GoogleMap address={location}></GoogleMap>
        </div>
        <div>
          <p className="font-medium text-sm text-nowrap text-center text-white">
            {t(location)}
          </p>
        </div>
      </section>
    </section>
  );
};
