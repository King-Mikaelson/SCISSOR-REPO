import Image from "next/image";



const  Features = () => {
  return (
    <main>
    <main className='bg-white  h-fit flex flex-col items-center justify-center  relative w-full pt-16'>
    <div className='w-full 2xl:w-screen'>
    <Image
    src="/circularTop.svg"
    alt="circle"
    width={100}
    height={100}
    className=" w-full h-full 2xl:w-screen 2xl:object-cover"
    />
   </div>

    <div className="w-full bg-[#F9FBFD] h-fit p-10 items-center flex justify-around flex-col lg:flex-row lg:px-24 lg:py-16 2xl:grid 2xl:grid-cols-2 2xl:justify-center">

    <div className="flex flex-col gap-0 md:gap-2 lg:gap-3 py-4 lg:py-0 self-start lg:my-auto mx-auto my-0">
      <h2 className="font-sans text-[#141414] font-bold lg:text-[2.5rem] text-3xl p-0 m-0 inline">One Stop.</h2>
      <p className="font-sans font-bold text-[#141414] lg:text-[2.5rem] text-3xl p-0 m-0 inline">Four <span className="text-[#005AE2]">Possibilities.</span></p>
    </div>

    <div className="lg:flex items-center lg:justify-between md:justify-center lg:mx-auto lg:my-0 lg:gap-16 gap-12  self-center flex-col lg:flex-row grid grid-cols-2 py-6 lg:py-0">
    <div className="flex flex-col text-[#141414] font-sans font-medium text-base self-start gap-3">
      <h3 className="lg:text-[2rem]  text-2xl font-semibold">3M</h3>
      <p className="whitespace-nowrap">Active users</p>
    </div>

    <div className="flex flex-col text-[#141414] font-sans font-medium text-base self-start gap-3">
      <h3 className="lg:text-[2rem] text-2xl font-semibold">60M</h3>
      <p className="lg:w-[12ch]">Links & QR codes created</p>
    </div>

    <div className="flex flex-col text-[#141414] font-sans font-medium text-base self-start gap-3">
      <h3 className="lg:text-[2rem] text-2xl font-semibold">1B</h3>
      <p className="lg:w-[20ch]">Clicked & Scanned connections</p>
    </div>

    <div className="flex flex-col text-[#141414] font-sans font-medium text-base self-start gap-3">
      <h3 className="lg:text-[2rem] text-2xl font-semibold">300k</h3>
      <p className="whitespace-nowrap">App Integrations</p>
    </div>
    </div>
    </div>

    </main>

    <main className='bg-white h-fit flex lg:flex-row items-center flex-col relative w-full lg:pt-32 pt-10  xl:px-36 lg:gap-24 justify-around px-10'>
    <div className="flex flex-col gap-5 self-start mx-auto my-0 relative">
      <h2 className="font-sans font-bold text-[#141414] lg:text-[2.5rem] text-3xl lg:whitespace-nowrap text-center lg:text-start">Why choose <span className="text-[#005AE2]">Scissors</span></h2>
      <p className="font-sans font-medium text-[#141414] text-base lg:w-[35ch]">Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
      <div className="absolute -top-2 lg:-left-[26rem] -left-[20rem] md:-left-[16rem]">
          <Image
            src="/faqLine.svg"
            alt="FAQ Line"
            width={100}
            height={100}
            className=" w-[55rem] h-[3rem]"
          />
        </div>
    </div>

    <div className="grid md:grid-cols-2 grid-cols-1  gap-16 self-start pt-10 lg:pt-0 ">
    
    <div className="flex flex-col gap-6 justify-center items-center lg:justify-normal lg:items-start">
      <Image 
      src="/urlFeature.svg"
      alt="shortening link img"
      width={100}
      height={100}
      className="w-[3.5rem] h-[3.5rem]"
      />
      <div className="flex flex-col gap-2">
      <p className="font-sans font-semibold text-[#141414] lg:text-[2rem] text-2xl text-center lg:text-start">URL Shortening</p>
      <p className="font-sans font-medium text-[#141414] text-base">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
      </div>
    </div>


    <div className="flex flex-col gap-6 justify-center items-center lg:justify-normal lg:items-start">
    <Image 
      src="/notesFeature.svg"
      alt="shortening link img"
      width={100}
      height={100}
      className="w-[3.5rem] h-[3.5rem]"
      />
      <div className="flex flex-col gap-2">
      <p className="font-sans font-semibold text-[#141414] lg:text-[2rem] text-2xl text-center lg:text-start">Custom URLs</p>
      <p  className="font-sans font-medium text-[#141414] text-base">With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
      </div>
    </div>

    <div className="flex flex-col gap-6 justify-center items-center lg:justify-normal lg:items-start">
    <Image 
      src="/codesFeature.svg"
      alt="shortening link img"
      width={100}
      height={100}
      className="w-[3.5rem] h-[3.5rem]"
      />
      
      <div className="flex flex-col gap-2">
      <p className="font-sans font-semibold text-[#141414] lg:text-[2rem] text-2xl text-center lg:text-start">QR Codes</p>
      <p  className="font-sans font-medium text-[#141414] text-base">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
      </div>
    </div>


    <div className="flex flex-col gap-6 justify-center items-center lg:justify-normal lg:items-start">
    <Image 
      src="/activityFeature.svg"
      alt="shortening link img"
      width={100}
      height={100}
      className="w-[3.5rem] h-[3.5rem]"
      />
      <div className="flex flex-col gap-2">
      <p className="font-sans font-semibold text-[#141414] lg:text-[2rem] text-2xl text-center lg:text-start">Data Analytics</p>
      <p  className="font-sans font-medium text-[#141414] text-base">Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
      </div>
    </div>

    </div>
    </main>
    </main>
  )
}

export default Features