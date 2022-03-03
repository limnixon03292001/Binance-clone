import React,{ useState }  from 'react';

import Logo from '../assets/Logo';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavMainData, NavSideData } from '../data/data';
import SideNav from './SideNav';
import ThemeToggle from './ThemeToggle';

const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(prev => !prev);
    }

  return <div className="bg-white dark:bg-[#181a20] dark:text-white text-gray-800 transition-colors duration-100">
            <nav className="flex items-center px-7 w-full">    
                <div className="h-full py-5">
                    <Logo />
                </div>

                <div className="flex w-full" >
                    <div className=" hidden lg:flex justify-between w-full text-sm lg:text-[14px]">
                        <ul className="flex space-x-3 items-center w-full ">
                            {NavMainData.map((data,index) => 
                                data?.item === "Products" ?  
                                    <li className="ml-[15px] mr-[15px] relative group h-full py-5 group" key={index}>
                                      <a href="#" className="flex items-center group-hover:text-[#fcd535]">{data?.icon1} <span className="text-[#848e9c]">{data?.icon2}</span></a>
                                      {data?.subItem && 
                                            <ul className="shadow-md absolute top-[69px] p-7 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white flex flex-wrap gap-5 w-[800px] dark:bg-[#1e2329]">
                                                {data?.subItem.map((data,index) => 
                                                    <li key={index} className="list-none flex-auto w-[30%]">
                                                        <a href="#" className="block w-full ">
                                                            {data?.item}
                                                            <span className="block text-xs text-gray-500">{data?.desc}</span>
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        }
                                    </li> : 
                                    <li className="flex items-center relative group m-0 h-full py-5 group" key={index}>
                                        <a href="#" className="whitespace-nowrap flex items-center justify-center group-hover:text-[#fcd535] ">{data?.item}
                                        {data?.subItem && <MdOutlineArrowDropDown size={24} className="fill-[#848e9c] group-hover:rotate-180 transition-all"/> }
                                         </a>
                                        {data?.subItem && 
                                            <ul className="shadow-md absolute top-[69px] p-7 w-max space-y-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white dark:bg-[#1e2329]">
                                                {data?.subItem.map((data,index) => 
                                                    <li key={index}>
                                                        <a href="#" className="block w-full">
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
                        <ul className="hidden xl:flex space-x-3  w-full justify-end">
                            {NavSideData.map((data,index) => 
                                <li  className="flex items-center justify-center group" key={index}>
                                    {data?.item === "Register" ? <button className="bg-[#fcd535] py-2 p-4 rounded-md dark:text-black ">{data?.item}</button> : data?.item === "Theme" ? 
                                    <ThemeToggle /> : <a href="#" className={`${data?.item === "English" || data?.item === "PHP" ? `after:content-['|'] after:ml-1 after:font-extralight group-hover:text-[#fcd535]` : ``}`}><span className='group-hover:text-[#fcd535]'>{data?.item}</span> </a>}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>  
                <button className="xl:hidden block " onClick={toggleNav}>
                    <GiHamburgerMenu size={26}/>
                </button>
                {/* SideNav Component / Background blur */}
                 <SideNav NavMainData={NavMainData} NavSideData={NavSideData} toggleNav={toggleNav} isOpen={isOpen}/>
            </nav>    
        </div>;
};

export default Navbar;
