import { useTranslation } from "react-i18next";
import { serviceWillTrustDetail } from "../../../data/service.data";
import { useState } from "react";
import { ServicePopup } from "../../ui/service.pop";
import {
  ExecutionandAdmin,
  ExtendedService,
  WillandTrust,
} from "../../ui/service.product";
import SmartWillPlan from "./smartWillPlan";

export const ProductSelect = () => {
  const { t } = useTranslation("service");
  const [currentOpen, setCurrentOpen] = useState<string>("");

  const openService = (title: string) => {
    setCurrentOpen(title);
  };

  const closeService = () => {
    setCurrentOpen("");
  };

  const currentServiceData = serviceWillTrustDetail.find(
    (data) => data.content_id === currentOpen
  );

  console.log(currentServiceData?.content_id);

  return (
    <section className="py-8">
      {" "}
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-2">
        {t("Products & Services")}
      </h1>
      <h3 className="text-base sm:text-lg text-center mb-4">
        {t("Smart & Personalized Solutions")}
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-12">
        <span className=" col-span-1 lg:col-span-2">
          <WillandTrust openService={openService}></WillandTrust>
        </span>
        <span className="col-span-1 pr-4">
          <ExecutionandAdmin openService={openService}></ExecutionandAdmin>
        </span>
        <span className="col-span-1 pl-4">
          <ExtendedService openService={openService}></ExtendedService>
        </span>
      </section>
      {currentServiceData && (
        <>
          {currentServiceData.content_id === "wtp_1" ? (
            <SmartWillPlan onClose={closeService}/>
          ) : (
            <ServicePopup
              data={currentServiceData as any}
              imageIndex={currentServiceData.content_id as string}
              onClose={closeService}
            />
          )}
        </>
      )}
    </section>
  );
};
