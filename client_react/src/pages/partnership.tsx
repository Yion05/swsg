import { Hero, ResellerProgram } from "../components/sections/partnership/partnershipHero";
import { CertifiedPlanner, JoinProgram, SmartWriterPortal } from "../components/sections/partnership/partnershipJoin";

const Partnership = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-36">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <Hero />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <ResellerProgram />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <JoinProgram />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <CertifiedPlanner />
      </div>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <SmartWriterPortal />
      </div>
    </section>
  );
};

export default Partnership;
