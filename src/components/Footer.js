import React from 'react'
import {FooterData} from '../data/data';
import AccordionFooter from './AccordionFooter';

const Footer = () => {
  return (
    <div className="dark:bg-[#181a20] pt-[60px] p-5 lg:px-[54px]">
        <div className=" max-w-full w-[1300px] h-full m-auto border-b border-b-gray-500 border-opacity-20 pb-[25px]">
            <div className="hidden md:flex flex-wrap gap-4">
                {FooterData.map((data,index) =>
                    <div key={index} className="flex-auto space-y-2">
                        <h1 className="dark:text-white font-semibold text-lg text-gray-800">{data.item}</h1>
                        <div key={index} className={`${data.item === 'Community' ? `flex flex-wrap gap-4 items-center` :'block space-y-2'} `}>
                            {data.subItem.map((subData,index) =>
                                <div key={index} className={`${data.item === 'Community' ? 'lg:flex-none' : 'flex-1'}space-y-6 group`}>
                                    <a href="#" className="w-full text-gray-500 group-hover:text-gray-800 dark:group-hover:text-white dark:text-[#848e9c] text-sm inline-block">{subData}</a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            
            {/* Accordion Footer */}
            <div className="block md:hidden">
                <AccordionFooter />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[35px] text-sm text-gray-600 dark:text-[#848e9c]">
            <p>Binance Clone © {new Date().getUTCFullYear()}</p>
            <p>Cloned By: Nixon Lim</p>
        </div>
    </div>
  )
}

export default Footer