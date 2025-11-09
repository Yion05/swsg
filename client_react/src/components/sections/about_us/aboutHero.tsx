import { useTranslation } from "react-i18next";

export const WhatIsAWill = () => {
  const { t } = useTranslation("about");

  return (
    <section className="p-8 bg-cover bg-center flex items-center justify-center text-center min-h-[60vh] md:h-[420px] bg-[url(/assets/about/whatIsWill.webp)] bg-center bg-cover">
      <div className="text-white">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("3.1.1_title")}
        </h2>
        <p className="text-base lg:text-lg mt-4 max-w-5xl mx-auto">
          {t(
            "3.1.2_content"
          )}{" "}
        </p>
      </div>
    </section>
  );
};

export const WhoWeAre = () => {
  const { t } = useTranslation("about");
  return (
    <section className="relative bg-white pt-8 md:pt-0 text-center">
      <div className="flex flex-col items-center justify-center py-16 z-10 bg-center bg-cover bg-[url(/assets/about/whoWeAre.webp)] min-h-[50vh]">
        <h2 className="text-white mt-8 md:mt-16 text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("3.2.1_title")}
        </h2>
        <h3 className="text-white text-sm md:text-base lg:text-lg mt-4 max-w-4xl px-4">
          {t("3.2.2_content")}
        </h3>
      </div>


      <div className=" my-12 max-w-7xl mx-auto px-4">
        <div className="text-[12px] md:text-base lg:text-lg text-black leading-relaxed space-y-4 md:space-y-6">
          <p>
            {t("3.2.3_content")}
          </p>
          <p>
            {t("3.2.4_content")}
          </p>
          <p>
            {t("3.2.5_content")}
          </p>
          <p>
            {t("3.2.6_content")}
          </p>
        </div>
      </div>
    </section>
  );
};

// export const SmartWillsSingapore = () => {
//   const { t } = useTranslation("about");
//   return (
//     <section className="bg-white pt-8 md:pt-0 text-center">
//       <div className="w-full  flex flex-col items-center justify-center py-16 z-10">
//         <h2 className="mt-8 md:mt-16 text-2xl md:text-3xl lg:text-5xl font-semibold">
//           {t("Who We Are?")}
//         </h2>
//         <h3 className="text-xm md:text-base lg:text-lg mt-4 max-w-4xl px-4">
//           {t("Know SmartWills - Your Smartest & Fastest Online Will Writer")}
//         </h3>
//       </div>

//       <div className="z-10 my-12 max-w-7xl mx-auto px-4">
//         <div className="text-base md:text-base lg:text-lg text-black leading-relaxed space-y-4 md:space-y-6">
//           <p>
//             We are a Wealth FinTech company dedicated to meeting the modern
//             demand for easy, fast, and trusted digital financial services.
//           </p>
//           <p>
//             SmartWills was born from a collaboration between financial advisors,
//             planners, legal experts, and technology professionals, with a shared
//             mission: to make Will preparation simple, affordable, and accessible
//             to everyone—regardless of economic background.
//           </p>
//           <p>
//             In late 2016, we began an ambitious initiative to build a
//             user-friendly Will-making platform, designed for both web and mobile
//             use. After nearly three years of research, planning, and
//             development, we proudly launched our online Will-making service in
//             Malaysia in early 2019.
//           </p>
//           <p>
//             As demand grew, we expanded our presence to Singapore, establishing
//             a branch office in mid-2023.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

export const OurVision = () => {
  const { t } = useTranslation("about");
  return (
    <section className="p-12 bg-button text-white flex flex-col items-center justify-center text-center py-24">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
          {t('3.3.1_title')}
        </h2>
        <p className="text-sm md:text-base lg:text-xl">
          {t("3.3.2_content")}
        </p>
      </div>
    </section>
  );
};
