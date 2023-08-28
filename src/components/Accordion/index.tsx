import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  datas: { question: string; answer: string, active: boolean };
};

function Accordion({ datas }: Props) {
    const [item, setItem] = useState(datas)
    const handleToggleActive = () => {
       setItem((prev) => ({...prev, active: !item.active}))
       console.log(item)
    }
  return (
    <main className={`mt-4 p-5 border-b   lg:w-[800px] w-full md:w-[450px] duration-500 group ${item?.active === true ? `is-active `: ''}`}>
      <div className="flex w-full" >
        <div className="w-full duration-500 text-[#141414] text-xl font-medium cursor-pointer" onClick={ () => handleToggleActive()}>
            {datas?.question}
        </div>
        <div className="block group-[.is-active]:hidden cursor-pointer" onClick={()=>handleToggleActive()}>
          <AiOutlinePlus size={20} />
        </div>
        <div className="hidden group-[.is-active]:block cursor-pointer" onClick={()=>handleToggleActive()}>
          <AiOutlineMinus size={20} />
        </div>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-28 group-[.is-active]:pt-6 duration-500 text-[#141414] text-base font-medium">
        {datas?.answer}
      </div>
    </main>
  );
}

export default Accordion;
