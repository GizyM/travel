import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center pb-[100px]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-32 overflow-hidden rounded-[40px] bg-[#292c27] bg-[url('/pattern.png')] bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-bold leading-[120%] lg:text-[64px] xl:max-w-[320px]">
            Get for free now!
          </h2>

          <p className="text-[16px] font-normal text-[#eeeeee]">
            Available on iOS and Android
          </p>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="secondary"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="outline-dark"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            className="w-full max-w-[550px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;