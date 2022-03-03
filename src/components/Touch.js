import React from 'react';
import {TouchData} from '../data/data';
const Touch = () => {
  return (
    <div>
        <div className="max-w-full w-[1300px] h-full m-auto p-5">
            <div className="mb-[20px] sm:mb-[60px]">
                <h1 className="text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl font-semibold">Get in Touch. Stay in Touch.</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {TouchData.map((data,index) =>
                 <div key={index} className="group cursor-pointer">
                    <div className="group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2b3139] p-4 rounded-md space-y-3">
                        <div>           
                            <img src= {data.icon} alt="icons" className="w-[50px] sm:w-[65px]" />
                        </div>
                        <div>
                            <h1 className="text-gray-800 dark:text-gray-200 text-md font-semibold">{data.title}</h1>
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{data.desc}</p>
                        </div>
                    </div>
                 </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Touch