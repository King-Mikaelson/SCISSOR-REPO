import Image from "next/image";
import Link from "next/link";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

type Props = {}

function Pricing({}: Props) {
  return (
    <main className="bg-white h-fit flex flex-col items-center justify-center lg:pt-48 pt-24 relative w-full px-6 lg:px-0">
    <div className="flex justify-center items-center relative md:mb-20 gap-4 flex-col">
      <h4 className="font-sans font-bold md:text-[2.5rem] text-2xl text-center  text-[#141414]">
      A <span className="text-[#005AE2]">price perfect</span> for your needs.
      </h4>
      <p className="font-sans font-medium text-base text-center  text-[#141414] lg:w-[56ch]">From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
      <div className="absolute -top-2 md:-left-[28.5rem] -left-[22rem]">
      <Image
        src="/faqLine.svg"
        alt="Line"
        width={100}
        height={100}
        className=" w-[55rem] h-[3rem]"
      />
    </div>
    </div> 

    <div>
    <div className="lg:flex grid grid-cols-1 gap-5 lg:gap-0">
    <div className="p-10 pt-5 h-fit xl:px-20 shadow-md border-[0.4px] lg:border-r-0 border-[#005AE2] border-solid rounded-xl lg:rounded-br-none lg:rounded-tr-none z-0 self-center">
       <h3 className="font-sans font-medium text-2xl  text-[#141414] pb-6">Basic</h3> 
       <div className="flex flex-col gap-1 pb-5">
       <h4 className="font-sans font-bold text-[2.5rem]  text-[#141414]">Free</h4>
       <p className="font-sans font-medium text-xl">Free plan for all users</p>
       </div>
       <div className="flex flex-col gap-6">
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Unlimited URL Shortening</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Basic Link Analytics</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Customizable Short Links</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Standard Support</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Ad-supported</p>
        </div>
       </div>
    </div>

    <div className="py-10 pt-5 lg:px-20 p-10 lg:h-[38rem] h-fit  flex justify-center flex-col  shadow-lg box text-[#FFF] z-20">
       <h3 className="font-sans font-medium text-2xl pb-5">Professional</h3> 
       <div className="flex flex-col gap-1 pb-6">
       <h4 className="font-sans font-bold text-[2.5rem]">$15/month</h4>
       <p className="font-sans font-medium text-xl">Ideal for business creators</p>
       </div>


       <div className="flex flex-col gap-6">
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={'#FFF'} />
        <p className="font-sans font-medium text-sm">Enhanced Link Analytics</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={'#FFF'}  />
        <p className="font-sans font-medium text-sm">Custom Branded Domains</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={'#FFF'}  />
        <p className="font-sans font-medium text-sm">Advanced Link Customization</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={'#FFF'}  />
        <p className="font-sans font-medium text-sm">Priority Support</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={'#FFF'}  />
        <p className="font-sans font-medium text-sm">Ad-free Experiencer</p>
        </div>
       </div>
    </div>


    <div className="p-10 pt-5  h-fit xl:px-20 shadow-md border-[0.4px] lg:border-l-0 border-[#005AE2] border-solid rounded-xl z-0 self-center  lg:rounded-bl-none lg:rounded-tl-none">
       <h3 className="font-sans font-medium text-2xl  text-[#141414] pb-6">Teams</h3> 
       <div className="flex flex-col gap-1 pb-5">
       <h4 className="font-sans font-bold text-[2.5rem]  text-[#141414]">$25/month</h4>
       <p className="font-sans font-medium text-xl">Share with up to 10 users</p>
       </div>
       <div className="flex flex-col gap-6">
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Team Collaboration</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">User Roles and Permissions</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Enhanced Security</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">API Access</p>
        </div>
        <div  className="flex gap-2">
        <IoMdCheckmarkCircleOutline size={20} color={"#005AE2"} />
        <p className="font-sans font-medium text-sm">Dedicated Account Manager</p>
        </div>
       </div>
    </div>
    </div>

    <div className="flex justify-center items-center my-16 mb-24 gap-4 flex-col md:flex-row">
          <div className="border solid border-[#0065FE] rounded-full px-7 py-[0.65rem]">
            <Link
              className="text-[#0065FE] text-base font-sans font-semibold"
              href={"/"}
            >
             Get Custom Pricing
            </Link>
          </div>

          <div className="text-base bg-[#0065FE]  px-10 py-[0.65rem] flex justify-center items-center rounded-full">
            <Link
              className=" text-[#FFF] text-base font-sans font-semibold "
              href={"/"}
            >
             Select Pricing
            </Link>
          </div>
        </div>
    </div> 

  </main>
  )
}

export default Pricing