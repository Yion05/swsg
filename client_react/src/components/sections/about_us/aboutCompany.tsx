import { businessPartner, platformPartner } from "../../../data/about.platform";
import { AboutUsCompany } from "../../ui/about.partner";

export const OurPlatformSecurity = () => {
  const { title, description, content } = platformPartner;
  return (
    <AboutUsCompany
      title={title}
      description={description}
      content={content}
    ></AboutUsCompany>
  );
};

export const OurBusinessPartner = () => {
  const { title, description, content } = businessPartner;
  return (
    <AboutUsCompany
      title={title}
      description={description}
      content={content}
    ></AboutUsCompany>
  );
};
