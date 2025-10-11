import { ContactForm, QnAPage } from "../components/sections/resourceQuestion";

const Resources = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-36 flex flex-col gap-8 mt-36">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <QnAPage></QnAPage>
      </div>
      <div className="rounded-lg shadow-lg overflow-hidden">
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default Resources;
