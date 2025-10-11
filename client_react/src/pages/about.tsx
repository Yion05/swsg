import { OurVision, WhatIsAWill, WhoWeAre } from "../components/sections/aboutHero";
import { MeetOurTeam, OurValue } from "../components/sections/aboutValue";

const About = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-36">
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
        <MeetOurTeam />
      </div>
    </section>
  );
};

export default About;
