import "../config/i18n";
import { HomeHero, ProtectWhat } from "../components/sections/homeHero";
import TestimonyHero from "../components/sections/testimony";
import AccoladesHero from "../components/sections/accolades";
import { Hero4Slide } from "../components/sections/homeSlide";
import {
  HeroOneComponent,
  HeroTwoComponent,
} from "../components/sections/homeComponents";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full px-4 sm:px-16 lg:px-36">
      <div className="shadow-lg w-full overflow-hidden rounded-lg">
        <HeroOneComponent></HeroOneComponent>
      </div>

      <div className="shadow-lg overflow-hidden rounded-lg">
        <HeroTwoComponent></HeroTwoComponent>
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
    </section>
  );
};

export default Home;
