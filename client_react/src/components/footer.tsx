const Footer = () => {
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText("healthxaxis@gmail.com");
  // };

  return (
    <footer className="bg-[url('/assets/footer/SWSGFooterBG.webp')] bg-center bg-cover w-full px-4 sm:px-16 lg:px-36">
      <section>
        <h1>MY SMARTWILLS PTE LTD</h1>
        <p>(UEN No. 202231612H)</p>
        <div className="grid grid-cols-5">
      {/* component data here */}
        </div>
      </section>
      <section className="flex justify-between">
        <span>
          <img src="/assets/footer/SWSGElement1.webp" alt="footer_singapore" />
        </span>
        <span>
          <img src="/assets/footer/SWSGElement2.webp" alt="footer_ISO + slogan" />
        </span>
      </section>
    </footer>
  );
};

export default Footer;
