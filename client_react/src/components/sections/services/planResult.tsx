import { serviceComponent } from "../../../data/service.data";

const PlanResult = () => {
  return (
    <section className="rounded-lg py-12 px-2 flex justify-center">
      <div className="w-full flex flex-col items-center pb-40 pt-8 px-4 text-center">
        <h3 className="text-base bg-button-secondary/30 rounded-xl px-2 py-1 w-fit">
          Smart recommendations for your next life chapter.
        </h3>

        <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl my-4">
          Your <span className="text-button">BEST</span> Match Plans
        </h1>

        <span className="mb-12">
          {" "}
          <h2 className="text-lg md:text-xl">
            Your answers helped us find plans that truly fit your life.
          </h2>
          <h2 className="text-lg md:text-xl">
            Designed to protect your loved ones, secure your legacy, and bring
            you peace of mind.
          </h2>
        </span>

        <h2 className="text-xl font-bold flex items-center">
          {" "}
          <img
            src="/assets/icon/customCheck.webp"
            alt="checkMark"
            className="mr-3 mt-1 flex-shrink-0 text-xl w-5"
          />
          Young Singles with Assets
        </h2>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-2 md:px-6 lg:px-2">
          {serviceComponent.slice(0, 4).map((data, index) => (
            <div
              key={index}
              className={`relative w-full aspect-square block group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group
                            ${
                              data.title !== "SmartWills Plan" &&
                              data.title !== "SmartWills Plus"
                                ? "cursor-pointer"
                                : "cursor-not-allowed"
                            }
                            `}
            >
              <img
                src={`/assets/service/solutions/${index}.webp`}
                className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
                alt={data.title}
              />

              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/25 group-hover:bg-black/50 duration-500">
                <div className="text-center">
                  <h1 className="text-white text-xl sm:text-2xl font-bold leading-snug">
                    {data.title}
                  </h1>
                  {(data.title === "SmartWills Pro" ||
                    data.title === "SmartWills PFT") && (
                    <p className="text-sm sm:text-lg text-white mt-1 font-medium text-nowrap">
                      {data.title === "SmartWills PFT"
                        ? "(Will and Testamentary Trust)"
                        : "(Smart Provident Fund Trust)"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default PlanResult;
