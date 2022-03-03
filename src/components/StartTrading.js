import React from 'react'

const StartTrading = () => {
  return (
    <div className="dark:bg-[#0b0e11] bg-[#fafafa] w-full">
        <div className="max-w-full w-[1300px] h-full m-auto py-[34px] md:py-[50px] text-center space-y-7">
            <h1 className="text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-[42px] font-semibold">Start trading now</h1>
            <div className="gap-4 flex flex-wrap justify-center items-center">
                <button className="bg-[#fcd535] py-2 px-5 sm:py-3 md:px-12 rounded-md dark:text-gray-800 text-[13px] sm:text-sm font-semibold ">Register Now</button>
                <button className="bg-[#eaecef] dark:bg-[#474d57] py-2 px-5 sm:py-3 md:px-14 rounded-md text-gray-800 dark:text-white text-[13px] sm:text-sm font-semibold ">Trade Now</button>
            </div>
        </div>
    </div>
  )
}

export default StartTrading