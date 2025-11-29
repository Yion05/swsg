import "../config/i18n";
import { HomeHero, ProtectWhat } from "../components/sections/home/homeHero";
import TestimonyHero from "../components/sections/home/testimony";
import AccoladesHero from "../components/sections/home/accolades";
import { Hero4Slide } from "../components/sections/home/homeSlide";
import {
  HeroOneComponent,
  HeroTwoComponent,
} from "../components/sections/home/homeComponents";
import useLazyLoad from "../hook/useLazyLoad";

const Home = () => {
  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px -100px 0px",
  });

  const slideFromTopAnimation = `
    transition-all duration-1000 ease-out delay-200
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"}
  `;

  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full px-4 sm:px-16 lg:px-36">
      <section className={`relative w-full rounded-lg mt-36 ${slideFromTopAnimation}`} ref={sectionRef}>
        <span className="relative z-10 w-full">
          <HeroOneComponent />
        </span>

        <span className={`relative z-20 -top-4 mt-[-8rem] md:mt-[-2rem] ${slideFromTopAnimation}`} ref={sectionRef}>
          <HeroTwoComponent />
        </span>
      </section>

      <section className="shadow-lg w-full overflow-hidden rounded-lg">
        <HomeHero></HomeHero>
      </section>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <Hero4Slide></Hero4Slide>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <ProtectWhat></ProtectWhat>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <TestimonyHero></TestimonyHero>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <AccoladesHero></AccoladesHero>
      </div>

      {/* <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <InfoHero></InfoHero>
      </div> */}
    </section>
  );
};

export default Home;
