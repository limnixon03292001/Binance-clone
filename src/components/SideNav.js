import React, { useState, useRef, useCallback } from 'react';
import {MdOutlineClose} from 'react-icons/md';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import useClickOutside from '../hooks/useClickOutside';
import ThemeToggle from './ThemeToggle';

const SideNav = ({NavMainData, NavSideData, toggleNav, isOpen}) => {
    const [clicked,setClicked] = useState("0");
    const ref = useRef();

    useClickOutside(ref,setClicked);
   
    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0");
        }
        setClicked(index);
    }

  return <>
        {/* Background  */}
        <div className={`${isOpen ? 'fixed inset-0 bg-black/30 w-full h-full' : 'hidden'} xl:hidden transition-color duration-100 ease-in z-50`} onClick={toggleNav}></div>  
        {/* MainSide Nav */}
        <div className={`${isOpen ? `translate-x-0` : `translate-x-full`} fixed top-0 right-0 bottom-0 w-auto lg:w-[327px] py-4 h-full min-w-0 space-y-3 overflow-auto xl:translate-x-full transition-all bg-white dark:bg-[#1e2329] dark:text-white text-[#1E2329] z-50`}>
                <div className="w-full mb-[30px] flex items-center justify-end px-4">
                    <button onClick={toggleNav}>
                        <MdOutlineClose size={24} className="dark:fill-white fill-[#848e9c]"/>
                    </button>
                </div>
                <ul className="space-y-3 px-4">
                    {NavSideData.map((data,index) => 
                        <li className="flex list-none" key={index}>
                            {data?.item === "Log in" ? <a href="#" className="text-center w-full">{data?.item}</a> : data?.item === "Register" ? <a href="#" className="py-2 p-4 rounded-md w-full text-center bg-[#fcd535] dark:text-black ">{data?.item} </a> : null}
                        </li>
                    )}
                </ul>
                <ul className="lg:hidden " ref={ref}>
                    {NavMainData.map((data,index) => 

                            <li className="flex flex-col relative group list-none group" key={index}>
                                <a href="#" className="flex items-center px-4 py-3 justify-between dark:group-hover:bg-[#2b3139] group-hover:bg-[#f5f5f5]"  onClick={() => handleToggle(index)}>
                                    <p className="text-[#1E2329] dark:text-white">{data?.item}</p>
                                    {data?.subItem && 
                                    <div className={`transition-all duration-200 ${clicked === index ? `rotate-180` : `rotate-0`}`}><MdOutlineArrowDropDown size={24} className={`dark:fill-white fill-[#848e9c] group-hover:fill-[#f0b90b] transition-all `}/></div> }
                                </a>
                                {data?.subItem && 
                                    <ul className={`overflow-hidden px-4 w-full transition-all duration-200 space-y-3 ${clicked === index ? `max-h-[1000px]` : `max-h-0`} `}>
                                        {data?.subItem.map((data,index) => 
                                            <li key={index} className="list-none text-[14px] w-full">
                                                <a href="#" className="block w-full text-[#1E2329] dark:text-white">
                                                    {data?.item}
                                                    <span className="block text-xs text-gray-500">{data?.desc}</span>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                }
                            </li>
                    )}
                </ul>
                <ul className="list-none ">
                    {NavSideData.map((data,index) => 
                        <li className="flex m-0 list-none group w-full" key={index}>
                            {data?.item === "Log in" || data?.item == "Register" ? null : 

                                data?.item !== "Theme" ? <a href="#" className="dark:text-white text-[#1E2329] w-full px-4 py-3 transition-colors dark:group-hover:bg-[#2b3139] group-hover:bg-[#f5f5f5]">
                                    {data?.item}
                                </a> : 
                                // Theme Toggle Part
                                <a href="#" className="dark:text-white text-[#1E2329] w-full px-4 py-3 transition-colors dark:group-hover:bg-[#2b3139] group-hover:bg-[#f5f5f5]">
                                    <ThemeToggle />
                                </a>
                            }
                        </li>
                    )}
                </ul>
                
        </div> {/* End MainSide Nav */}
    </>
  
};

export default SideNav;
