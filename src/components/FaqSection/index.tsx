import Link from "next/link";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Accordion from "../Accordion";
import Image from "next/image";


function Faq() {
  const list = [
    {
      id:1,
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,
    },
    {
      id:2,
      question:
        "Is it necessary to create an account to use the URL shortening service?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,
    },
    {
      id:3,
      question: "Are the shortened links permanent? Will they expire?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
        active: false,

    },
    {
      id:4,
      question:
        "Are there any limitations on the number of URLs I can shorten?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
    {
      id:5,
      question:
        "Can I customize the shortened URLs to reflect my brand or content?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
    {
      id:6,
      question: "Can I track the performance of my shortened URLs?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
    {
      id:7,
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
    {
      id:8,
      question: "What is a QR code and what can it do?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
    {
      id:9,
      question:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
      active: false,

    },
  ];
  return (
    <>
      <main className="bg-white h-fit flex flex-col items-center justify-center py-24 relative w-full">
        <div className="flex justify-center items-center relative md:mb-8">
          <h4 className="font-sans font-bold md:text-[2.5rem] text-2xl text-center  text-[#141414]">
            FAQs
          </h4>
          <div className="absolute -bottom-2 md:-left-32 -left-20">
          <Image
            src="/faqLine.svg"
            alt="FAQ Line"
            width={100}
            height={100}
            className=" w-[55rem] h-[3rem]"
          />
        </div>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <Accordion key={item.id} datas={item} />
          ))}
        </div>
        
        <div className="absolute top-0 left-0">
          <Image
            src="/Group3.png"
            alt="wave logo"
            width={100}
            height={100}
            className=" w-[30.28306rem] h-[50.25863rem]"
          />
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src="/waveFaqRight.svg"
            alt="wave logo"
            width={100}
            height={100}
            className=" w-[28.28306rem] h-[25.25863rem]"
          />
        </div>
      </main>

      <main className="bg-[url('/smallWavelengthBg.png')] bg-cover bg-center bg-no-repeat h-[18.5rem] w-full  flex justify-center items-center flex-col gap-10">
        <h4 className="font-sans font-bold md:text-[2.5rem] text-2xl text-center  text-[#FFF]">
          Revolutionizing Link Optimization
        </h4>

        <div className="text-base bg-[#0065FE] py-[0.65rem] px-10 flex justify-center items-center rounded-full">
          <Link
            className="text-[#FFF] text-base font-sans font-semibold"
            href={"/"}
          >
            Get Started
          </Link>
        </div>
      </main>
    </>
  );
}

export default Faq;
