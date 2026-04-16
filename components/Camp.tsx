import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-[40px] 2xl:rounded-[40px]`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-[#30af5b] p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-bold text-white">{title}</h4>
            <p className="text-[14px] font-normal text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full border-2 border-white/70 object-cover"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>

          <p className="text-[16px] font-bold text-white md:text-[20px]">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative mx-auto flex w-full max-w-[1440px] flex-col py-10 lg:mb-10 lg:py-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-[url('/img-1.png')]"
          title="Triund Hill Camp"
          subtitle="Dharmshala, India"
          peopleJoined="50+ Joined"
        />

        <CampSite
          backgroundImage="bg-[url('/img-2.png')]"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="mt-10 flex justify-end px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#30af5b] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-[40px] xl:px-16 xl:py-20">
          <h2 className="text-[24px] font-normal capitalize text-white md:text-[32px] 2xl:text-[64px] 2xl:leading-[120%]">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>

          <p className="mt-5 text-[14px] font-normal text-white xl:text-[16px]">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>

          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;