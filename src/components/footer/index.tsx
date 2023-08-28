import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import Logo from "../../../public/logoBlack.svg";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
      <main className="mt-10 mb-auto text-black bg-[#FFF] pt-10   lg:px-12 xl:px-48 px-4 mx-0 w-full flex flex-col relative">

        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4  justify-evenly gap-x-20 ">
          <div className="self-start w-full order-8 md:order-1">
            <Image
              src={Logo}
              alt="logo"
              className=" w-[10.6827rem] h-[2.5rem] object-contain"
            />
            <div className="flex py-8 md:gap-5 md:items-center md:ml-5 w-full">
              <Link href={"/"}>
                <FaTwitter
                  size={25}
                  className=" text-[#141414] cursor-pointer text-lg"
                />
              </Link>
              <Link href="/">
                <BsInstagram
                  size={22}
                  className=" text-[#141414] cursor-pointer text-lg"
                />
              </Link>
              <Link href={"/"}>
                <AiFillLinkedin
                  size={25}
                  className=" text-[#141414] cursor-pointer text-lg"
                />
              </Link>
              <Link href="/">
                <AiFillFacebook
                  size={25}
                  className=" text-[#141414] cursor-pointer text-lg"
                />
              </Link>
            </div>
          </div>

          <div className="text-[1.857rem] flex flex-col  font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Why Scissor ?
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Scissor 101
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Integrations &API
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Pricing
            </Link>
          </div>

          <div className="text-[1.857rem] flex flex-col font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Solutions
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Social Media
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Digital Marketing
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Customer Service
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              For Developers
            </Link>
          </div>

          <div className="text-[1.857rem] flex flex-col  font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Products
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Link Management
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              QR Codes
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Link-in-bio
            </Link>
          </div>

          <div className="text-[1.857rem] flex flex-col  font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Company
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              About Scissor
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Careers
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Partners
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Press
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Contact
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Reviews
            </Link>
          </div>

          <div className="lg:col-start-2 text-[1.857rem] flex flex-col  font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Resources
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Blog
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Resource Library
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Developers
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              App Connectors
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Support
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Trust Center
            </Link>

            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Browser Extension
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Mobile App
            </Link>
          </div>

          <div className="text-[1.857rem] flex flex-col  font-sans self-start md:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Features
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Branded Links
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Mobile Links
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Campaign
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Management
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              & Analytics
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              QR Code generation
            </Link>
          </div>

          <div className="text-[1.857rem] flex flex-col  font-sans self-start lg:order-2 order-1">
            <h3 className="text-base font-bold font-sans text-[#071827] pb-2">
              Legal
            </h3>
            <Link
              href="#first-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#second-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Cookie Policy
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Terms of Service
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Acceptable Use Policy
            </Link>
            <Link
              href="#third-section"
              className="text-base font-medium font-sans text-[#112232]"
            >
              Code of Conduct
            </Link>
          </div>
          </div>






        <div className="text-sm font-medium font-sans text-[#112232]  pb-6  flex justify-center  md:justify-end">
          <p className="text-center px-2">Term of Service</p>
          <p className="text-center px-2 border-r border-l border-[#112232] border-solid">
            Security
          </p>
          <p className="text-center px-4 ">ⓒ Scissor 2023</p>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/waveLeft.svg"
            alt="logo"
            width={100}
            height={100}
            className=" w-[31.28306rem] h-[32.25863rem]"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/waveRight.svg"
            alt="logo"
            width={100}
            height={100}
            className=" w-[40.28306rem] h-[20.25863rem]"
          />
        </div>
      </main>
  );
}

export default Footer;
