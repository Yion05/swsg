import { type FC } from "react";
import {
  serviceExecutionAdmin,
  serviceExtendedService,
  serviceWillTrust,
} from "../../data/service.data";

interface serviceFunction {
  openService: (title: string) => void;
}

export const WillandTrust: FC<serviceFunction> = ({ openService }) => {
  return (
    <>
      <h1 className="md:text-2xl text-3xl font-semibold bg-button-secondary/30 text-center p-2 rounded-full mb-4 mt-8">
        Will and Trust Planning
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {serviceWillTrust.map((data, index) => (
          <div
            key={index}
            onClick={() => openService(data.content_id)}
            className={`relative w-full aspect-square block group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group
                            ${
                              data.content_id !== "wtp_4"
                                ? "cursor-pointer"
                                : "cursor-not-allowed"
                            }
                        `}
          >
            <img
              src={`/assets/service/solutions/${index}.webp`}
              className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
              alt={data.content_id}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/25 group-hover:bg-black/50 duration-500">
              <div className="text-center">
                {data.title.map((data) => (
                  <h1
                    key={data}
                    className="text-white text-lg sm:text-xl font-bold leading-snug text-nowrap"
                  >
                    {data}
                  </h1>
                ))}
                {data.extra_title ? (
                  <p className="text-sm sm:text-base text-white font-bold text-nowrap">
                    {data.extra_title}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export const ExecutionandAdmin: FC<serviceFunction> = ({ openService }) => {
  return (
    <>
      <h1 className="md:text-2xl text-3xl font-semibold bg-button-secondary/30 text-center p-2 rounded-full mb-4 mt-8">
        Will Execution & Administration
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {serviceExecutionAdmin.map((data, index) => (
          <div
            key={index}
            onClick={() => openService(data.content_id)}
            className={`relative w-full aspect-square block group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group
                        ${"cursor-pointer"}
                        `}
          >
            <img
              src={`/assets/service/solutions/${index + 4}.webp`}
              className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
              alt={data.content_id}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/25 group-hover:bg-black/50 duration-500">
              <div className="text-center">
                {data.title.map((data) => (
                  <h1
                    key={data}
                    className="text-white text-lg sm:text-xl font-bold leading-snug text-nowrap"
                  >
                    {data}
                  </h1>
                ))}
                {data.extra_title ? (
                  <p className="text-sm sm:text-base text-white font-bold text-nowrap">
                    {data.extra_title}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export const ExtendedService: FC<serviceFunction> = ({ openService }) => {
  return (
    <>
      <h1 className="md:text-2xl text-3xl font-semibold bg-button-secondary/30 text-center p-2 rounded-full mb-4 mt-8">
        Extended Services
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {serviceExtendedService.map((data, index) => (
          <div
            key={index}
            onClick={() => openService(data.content_id)}
            className={`relative w-full aspect-square block group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group
                        ${"cursor-pointer"}
                        `}
          >
            <img
              src={`/assets/service/solutions/${index + 6}.webp`}
              className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-90"
              alt={data.content_id}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-black/25 group-hover:bg-black/50 duration-500">
              <div className="text-center">
                {data.title.map((data) => (
                  <h1
                    key={data}
                    className="text-white text-lg sm:text-xl font-bold leading-snug text-nowrap"
                  >
                    {data}
                  </h1>
                ))}
                {data.extra_title ? (
                  <p className="text-sm sm:text-base text-white font-bold text-nowrap">
                    {data.extra_title}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
