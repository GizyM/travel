import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[url('/feature-bg.png')] bg-center bg-no-repeat py-24">
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-end px-6 lg:px-20">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-bold leading-[120%] lg:text-[64px]">
              Our Features
            </h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full bg-[#30af5b] p-4 lg:p-7">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <h3 className="mt-5 text-[20px] font-bold capitalize lg:text-[32px] lg:leading-[120%]">
        {title}
      </h3>

      <p className="mt-5 bg-white/80 text-[16px] text-[#7b7b7b] lg:mt-[30px] lg:bg-transparent">
        {description}
      </p>
    </li>
  );
};

export default Features;