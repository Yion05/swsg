import {
  OurBusinessPartner,
  OurPlatformSecurity,
} from "../components/sections/about_us/aboutCompany";
import {
  OurVision,
  WhatIsAWill,
  WhoWeAre,
} from "../components/sections/about_us/aboutHero";
import { OurValue } from "../components/sections/about_us/aboutValue";

const About = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-12 mt-36">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <WhatIsAWill />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <WhoWeAre />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <OurVision />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <OurValue />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <OurPlatformSecurity />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <OurBusinessPartner />
      </div>
    </section>
  );
};

export default About;
