import React,{useState, useRef} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import { FooterData } from '../data/data';
import useClickOutside from '../hooks/useClickOutside';

const AccordionFooter = () => {
    const [clicked,setClicked] = useState("0");
    const ref = useRef();

    useClickOutside(ref,setClicked);
   
    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0");
        }
        setClicked(index);
    }
  return (
    <div>
        <div className="" ref={ref}>
                {FooterData.map((data,index) =>
                <div className="py-2" key={index}>
                    <div className="cursor-pointer block w-full" onClick={() => handleToggle(index)}>
                        <div className="flex justify-between items-center w-full">
                            <h1 className="dark:text-white font-semibold text-sm text-lg text-gray-800">{data.item}</h1>
                            {data.item !== 'Community' &&  <span>{clicked === index ? <AiOutlineMinus size={21} className="dark:fill-white fill-gray-800"/> : <AiOutlinePlus size={21} className="dark:fill-white fill-gray-800"/>} </span>}
                        </div>
                    </div>
                      <div className={`${data.item === 'Community' ? `` :`block w-full transition-all duration-200 overflow-hidden ${clicked === index ? `max-h-[1000px]` : `max-h-0`} `} `}>
                          <div className={`pt-2 space-y-2 ${data.item === 'Community' ? `flex flex-wrap items-center space-x-4` :`block w-full`}`}>
                            {data.subItem.map((subData,index) =>
                                <div key={index} className={`text-left group h-full`}>
                                    <a href="#" className="w-full text-gray-500 group-hover:text-gray-800 dark:group-hover:text-white dark:text-[#848e9c] text-sm inline-block">{subData}</a>
                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                )}
            </div>
    </div>
  )
}

export default AccordionFooter