import Image from "next/image";
import { useState } from "react";
import CustomDropDown from "../CustomDropdown";


type Props = {};

const items = [
  {
    id: 1,
    value: "Scissor.com",
  },
  {
    id: 2,
    value: "Enter Domain",
  },
  {
    id: 3,
    value: "Add Domain",
  },
];

function LinkShortener({}: Props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelect = (option:any) => {
    setSelectedOption(option);
  };

  console.log(selectedOption)
  return (
    <main className="bg-[url('/wavelengthBg.png')] bg-cover bg-center bg-no-repeat h-[32rem] w-full flex justify-center items-center px-6">
      <div className="bg-white lg:px-10 px-6 py-10  h-fit rounded-xl lg:w-[33%] w-full flex flex-col gap-6">
        <form className="w-full flex flex-col gap-6">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="w-full border solid rounded-xl border-[#3284FF] py-4 px-4 font-sans font-base text-base  placeholder:text-[#3284FF] placeholder:font-medium placeholder:font-sans placeholder:text-xs"
          />
          <div className="flex gap-4 flex-col md:flex-row ">
          <CustomDropDown items={items} title={"Choose Domain"} multiselect={false}/>

            <input
              type="text"
              placeholder="Type Alias here"
              className="w-full border solid rounded-xl border-[#3284FF] py-3 px-4 font-sans font-base text-base  placeholder:text-[#3284FF] placeholder:font-medium placeholder:font-sans placeholder:text-xs"
            />
          </div>
          <div className="flex w-full">
            <button className="text-sm bg-[#0065FE]  text-[#FFF] font-sans font-semibold  px-5 py-2 flex justify-center items-center rounded-full w-full gap-2">
              <p>Trim URL</p>
              <Image
                src="/magicwand.svg"
                alt="magic wand img"
                width={100}
                height={100}
                className="w-[2rem] h-[2rem]"
              />
            </button>
          </div>
        </form>
        <div className="pb-3">
          <p className="font-sans text-[#3284FF] font-medium text-sm">
            By clicking TrimURL, I agree to the{" "}
            <span className="font-bold">Terms of Service, Privacy Policy </span>
            and Use of Cookies.
          </p>
        </div>
      </div>
    </main>
  );
}

export default LinkShortener;
