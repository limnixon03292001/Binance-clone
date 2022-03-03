import React from 'react';
import mobileTrade from '../assets/images/mobile-trade.png';
import desktopTrade from '../assets/images/desktop-trade.png';
import mobileFlat from '../assets/images/mobile-fiat.png';
import QrCode from './QrCode';
import {AiFillApple} from 'react-icons/ai';
import {FaAndroid} from 'react-icons/fa';
import {FaGooglePlay} from 'react-icons/fa';
import {FaTimesCircle} from 'react-icons/fa';
import {FaWindows} from 'react-icons/fa';
import {FaLinux} from 'react-icons/fa';
import {AiTwotoneApi} from 'react-icons/ai';

const TradeAnywhere = () => {
  return (
    <div className="w-full h-full mt-[40px]">
        <div className="max-w-full w-[1300px] h-full m-auto p-5">
        <div className="space-y-4 ">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">Trade. Anywhere.</p>
            <p className="text-sm sm:text-md md:text-[16px] text-gray-600 dark:text-[#848e9c]">Compatible with multiple devices, start trading with safety and convenience.</p>
        </div>
        <div className="w-full h-full mt-[40px] md:mt-[100px] ">
            {/* Image */}
            <div className="w-full h-full m-auto flex gap-5 flex-col sm:flex-row">
                <div className="flex-1 max-h-full h-[450px]">
                    <div className="sm:hidden w-full h-[250px] overflow-hidden before:absolute before:bottom-0 before:w-[66%] before:h-[2px] before:dark:bg-[#272A2E] before:bg-[#eaecef] before:left-2/4 before:-translate-x-2/4 relative">
                        <div className="bg-no-repeat bg-center bg-top bg-[length:auto_170%] w-full h-full " style={{backgroundImage: `url(${mobileTrade})`}}></div>
                    </div>

                    <div className="hidden md:hidden sm:block w-full h-full relative">
                        <div className="absolute bg-no-repeat bg-[length:auto_100%] bg-center w-full h-full " style={{backgroundImage: `url(${mobileTrade})`}}></div>
                        <div className="bg-no-repeat bg-center bg-[length:auto_50%] w-full h-full absolute bottom-50 " style={{backgroundImage: `url(${mobileFlat})`}}></div>
                    </div>

                    <div className="hidden md:block w-full h-full relative">
                        <div className="bg-no-repeat bg-left bg-[length:auto_85%] h-full w-full z-20 relative" style={{backgroundImage: `url(${desktopTrade})`}}>
                        <div className="w-full h-full">
                            <div className="relative w-full h-full">
                                <div className="absolute right-0 bg-no-repeat bg-[length:200px]  bg-center max-w-full w-[200px] h-full " style={{backgroundImage: `url(${mobileTrade})`}}></div>

                                <div className="absolute -right-1 bottom-44 translate-y-2/4 bg-no-repeat bg-center bg-[length:210px] max-w-full w-[210px] h-[180px] " style={{backgroundImage: `url(${mobileFlat})`}}></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>


                <div className="w-full h-full flex-1 p-0 sm:p-2 md:px-7 ">
                    <div className="flex flex-col-reverse sm:flex-col gap-y-7 space-y-5">
                        <div className="flex flex-col sm:flex-row items-center sm:space-x-5 space-y-4">
                            <div className="rounded-md">
                                <QrCode />
                            </div>
                            <div className="space-y-2 w-full text-center sm:text-left">
                                <p className="dark:text-gray-200 sm:dark:text-gray-100 text-md sm:text-xl">Scan to Download</p>
                                <p className="hidden sm:block text-gray-600 dark:text-gray-300 text-xl font-semibold">iOS & Android</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-center text-gray-700 dark:text-gray-300">
                            <div className="group cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-2">
                                    <AiFillApple size={35} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p>App Store</p>
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-2">
                                    <FaAndroid size={35} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p>Android Apk</p>
                                </div>
                            </div>
                            <div className="group hidden sm:block cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                                    <FaGooglePlay size={32} className="m-auto dark:fill-white fill-gray-800" />
                                    <p>Google Play</p>
                                </div>
                            </div>
                            <div className="group hidden md:block cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                                    <FaTimesCircle size={32} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p>MacOS</p>
                                </div>
                            </div>
                            <div className="group hidden md:block cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                                    <FaWindows size={32} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p>Windows</p>
                                </div>
                            </div>
                            <div className="group hidden md:block cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                                    <FaLinux size={32} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p>Linux</p>
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                                    <AiTwotoneApi size={32} className="m-auto dark:fill-white fill-gray-800"/>
                                    <p className="">Api</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Image End */}
        </div>
        </div>
    </div>
  )
}

export default TradeAnywhere