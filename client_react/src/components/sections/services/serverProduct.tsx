import { useTranslation } from "react-i18next";
import { serviceComponent } from "../../../data/service.data";
import { useState } from "react";
import { ServicePopup } from "../../ui/service.pop";

export const ProductSelect = () => {
  const { t } = useTranslation("service");
  const [currentOpen, setCurrentOpen] = useState<string>("");

  const openService = (title: string) => {
    if (title !== "SmartWills Plan" && title !== "SmartWills Plus") {
      setCurrentOpen(title);
    }
  };

  const closeService = () => {
    setCurrentOpen("");
  };

  const currentServiceData = serviceComponent.find(
    (data) => data.title === currentOpen
  );

  return (
    <section>
      <h1 className="text-5xl font-semibold text-center mb-2">
        {t("hero3_productService")}
      </h1>
      <h3 className="text-lg text-center mb-4">{t("hero3_des")}</h3>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {serviceComponent.map((data, index) => (
          <div
            key={index}
            onClick={() => openService(data.title)}
            className={`relative w-full aspect-square block group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group
              ${
                data.title !== "SmartWills Plan" &&
                data.title !== "SmartWills Plus"
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }
              `}
          >
            <img
              src={`/assets/service/solutions/${index}.webp`}
              className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
              alt={data.title}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/25 group-hover:bg-black/50 duration-500">
              <div className="text-center">
                {" "}
                <h1 className="text-white text-xl sm:text-2xl font-bold leading-snug">
                  {data.title}
                </h1>
                {(data.title === "SmartWills Pro" ||
                  data.title === "SmartWills PFT") && (
                  <p className="text-lg text-white mt-1 font-medium">
                    {data.title === "SmartWills PFT"
                      ? "(Will and Testamentary Trust)"
                      : "(Smart Provident Fund Trust)"}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
      {currentServiceData && currentServiceData.content && (
        <ServicePopup
          data={currentServiceData as any}
          imageIndex={serviceComponent.findIndex(
            (d) => d.title === currentOpen
          )}
          onClose={closeService}
        />
      )}
    </section>
  );
};
