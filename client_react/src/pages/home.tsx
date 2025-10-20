import "../config/i18n";
import { HomeHero, InfoHero, ProtectWhat } from "../components/sections/home/homeHero";
import TestimonyHero from "../components/sections/home/testimony";
import AccoladesHero from "../components/sections/home/accolades";
import { Hero4Slide } from "../components/sections/home/homeSlide";
import {
  HeroOneComponent,
  HeroTwoComponent,
} from "../components/sections/home/homeComponents";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full px-4 sm:px-16 lg:px-36">
      <div className="relative w-full rounded-lg mt-36">
        <span className="relative z-10 w-full">
          <HeroOneComponent />
        </span>

        <span className="relative z-20 mt-[-8rem] md:mt-[-2rem]">
          <HeroTwoComponent />
        </span>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <HomeHero></HomeHero>
      </div>

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
        <ProtectWhat></ProtectWhat>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <AccoladesHero></AccoladesHero>
      </div>

      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <InfoHero></InfoHero>
      </div>
    </section>
  );
};

export default Home;
