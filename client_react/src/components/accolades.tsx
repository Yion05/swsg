import type { accolades_schema } from "../types/types"

const AccoladesHero = () => {
    const staticData: accolades_schema[] = [
        {
            accolades_logo: "/assets/accolades/ISO.png",
            accolades_title: "acco_1_title",
            accolades_des: "acco_1_des",
        }
    ];

  return (
    <div>AccoladesHero</div>
  )
}

export default AccoladesHero