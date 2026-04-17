import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 lg:px-20">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />

        <p className="-mt-1 mb-3 text-[18px] font-normal uppercase text-[#30af5b]">
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-bold leading-[120%] xl:max-w-[390px] lg:text-[64px]">
            Guide You to Easy Path
          </h2>

          <p className="text-[16px] font-normal text-[#7b7b7b] xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 lg:px-20">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-[40px]"
        />

        <div className="absolute flex gap-3 rounded-3xl border bg-white py-8 pl-5 pr-7 shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between gap-8">
                <p className="text-[16px] font-normal text-[#a2a2a2]">
                  Destination
                </p>
                <p className="text-[16px] font-bold text-[#30af5b]">48 min</p>
              </div>

              <p className="mt-2 text-[20px] font-bold">
                Dharamkot, McLeodganj
              </p>
            </div>

            <div className="mt-6 flex w-full flex-col">
              <p className="text-[16px] font-normal text-[#a2a2a2]">
                Start Track
              </p>
              <h4 className="mt-2 whitespace-nowrap text-[20px] font-bold">
                Triund
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;