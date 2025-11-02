import { ContactForm } from "../components/sections/contact_us/contactForm";
import {
  ContactBG,
  ContactHero,
} from "../components/sections/contact_us/contactHero";

const Contact = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-36">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <ContactBG />
      </div>
      <div className="rounded-lg shadow-lg overflow-hidden">
        <ContactHero />
      </div>
      <div className="rounded-lg shadow-lg overflow-hidden">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
