import {
  HeroBackgroundOne,
  PlanForYou,
} from "../components/sections/services/serviceComponent";
import { ProductSelect } from "../components/sections/services/serviceProduct";

const Service = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-24 flex flex-col gap-8 mt-24">
      <div className="rounded-lg overflow-hidden">
        <HeroBackgroundOne></HeroBackgroundOne>
      </div>
      {/* <div className="rounded-lg overflow-hidden">
        <SelectRightPlan></SelectRightPlan>
      </div> */}
      {/* <div className="shadow-lg rounded-lg overflow-hidden">
        <SmartWillPlan></SmartWillPlan>
      </div> */}
      <div className="shadow-lg flex flex-col items-center p-4 rounded-2xl">
        <ProductSelect></ProductSelect>
      </div>

      <div className="shadow-lg rounded-lg overflow-hidden">
        <PlanForYou></PlanForYou>
      </div>
    </section>
  );
};

export default Service;
