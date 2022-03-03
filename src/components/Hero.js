import React from 'react';
import { LiveCryptoData } from '../data/data';
import hero from '../assets/images/hero.png';
const Hero = () => {
  return <div className="bg-[#fafafa] dark:bg-[#0b0e11] transition-colors duration-100">
            <div className="p-2 max-w-full w-[1300px] m-auto lg:h-[480px] flex flex-col justify-center bg-no-repeat  bg-cover" style={{backgroundImage: `url(${hero})`}}>
                        <div className="flex flex-col justify-center m-4 lg:h-[200px] py-6 max-h-max ">
                            <div className="space-y-4 dark:text-white">
                                <h1 className="text-2xl lg:text-5xl font-semibold text-gray-800 dark:text-white">Buy & sell Crypto in minutes</h1>
                                <p className="text-sm lg:text-[16px] text-gray-700 dark:text-[#848e9c]">Join the world's largest crypto exchange</p>
                                <button className="bg-[#fcd535] text-sm font-semibold py-3 lg:py-3 px-16 text-[16px] rounded-md text-gray-800">Register Now</button>
                            </div>
                        </div>
                        {/* Crypto live */}
                        <div className="h-auto flex flex-wrap">
                            {LiveCryptoData?.map((data,index) =>
                                <div key={index} className="m-5 flex-auto text-[12px] lg:text-[16px]">
                                    <div className="space-x-1">
                                        <span className="dark:text-gray-300 text-gray-600 ">{data?.cryptoName}</span>
                                        <span className="text-red-500">{data?.percentage}</span>
                                    </div>
                                    <p className="lg:text-2xl text-xl font-semibold dark:text-gray-200 text-gray-800">{data?.total}</p>
                                    <p className="dark:text-gray-400 text-gray-600">{data?.value}</p>
                                </div>
                            )}
                        </div>
            </div>
        </div>
};

export default Hero;
