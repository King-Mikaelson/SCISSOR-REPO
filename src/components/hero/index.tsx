import React from "react";
import stroke from "@/../../public/stroke.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className={`flex flex-col px-6 lg:px-16 xl:px-36 pt-40 relative`}>
      <div>
        <div className="relative">
          <h1 className="font-sans text-[#141414] font-bold lg:text-5xl text-2xl lg:leading-[6rem] text-center mb-0 pb-0 md:w-[35ch] lg:w-auto xl:w-[35ch]  md:my-0 md:mx-auto">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-[#005AE2]">URL Shortening</span> Solution
          </h1>
          <div className="hidden md:block center">
            <Image
              src="/stroke.svg"
              alt="Stroke Image"
              className="w-[10.85188rem] h-[1.54425rem]"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
        <p className="text-center font-sans text-[#141414] font-medium text-lg lg:w-[65ch] lg:my-0 lg:mx-auto py-4">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>

        <div className="flex justify-center items-center my-9 gap-14">
          <div className="text-base bg-[#0065FE] py-[0.65rem] px-10 flex justify-center items-center rounded-full">
            <Link
              className="text-[#FFF] text-base font-sans font-semibold"
              href={"/"}
            >
              Sign Up
            </Link>
          </div>

          <div className="">
            <Link
              className="text-[#0065FE] text-base font-sans font-semibold"
              href={"/"}
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative mt-11">
        <div className="z-0 -mt-4">
          <Image
            src="/ovalBg.svg"
            alt="Oval Image"
            className="w-[14.90906rem] h-[15.70013rem]"
            width={100}
            height={24}
            priority
          />
        </div>

        <div className="flex flex-col justify-center items-center px-16 py-14 rounded-3xl border-[0.5px] border-solid border-[#005AE2] bg-[#FEFCFF] z-30 md:-ml-32">
        <Image
            src="/rings.svg"
            alt="Rings connecting a line Image"
            className="w-[24rem] h-[5rem]"
            width={100}
            height={24}
            priority
          />
        <p className="text-[#141414] font-sans font-semibold text-base md:w-[38ch] md:mxauto md:my-0 text-center">Seamlessly transform your long URLs into concise and shareable links with just few clicks.</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
