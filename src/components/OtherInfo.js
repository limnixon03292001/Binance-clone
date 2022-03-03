import React,{useRef ,useState} from 'react';
import { ImgSliderData } from '../data/data';
import {HiOutlineArrowDown} from 'react-icons/hi';
import TradeAnywhere from './TradeAnywhere';
import Touch from './Touch';
import StartTrading from './StartTrading';

const OtherInfo = () => {
  const [noSlide, setNoSlide] = useState(0);
  const listRef = useRef();

  const slide = (direction) => {

    let distance = listRef.current.getBoundingClientRect().x - 100 ;
    if(direction === "left" && noSlide > 0){
      setNoSlide(prev => prev - 1)
      listRef.current.style.transform = `translateX(${325 + distance}px)`;
    }

    if(direction === "right" && noSlide < 2){
      setNoSlide(prev => prev + 1)
      listRef.current.style.transform = `translateX(${-325 + distance}px)`;
    }
  }
  return <div className="w-full transition-colors duration-100 dark:bg-[#181a20] rounded-t-3xl pt-4">
      <div className="max-w-full w-[1300px] h-full m-auto p-5 space-y-14">
          {/* Image Slider */}
          <div className="overflow-hidden  relative">
            <button className="z-20 text-white absolute left-0 top-0 bottom-0 rotate-90" onClick={()=> slide("left")} ><HiOutlineArrowDown size={35}/></button> 
              <div className={`flex gap-2 transition-translate duration-200 container`} ref={listRef}>
                {ImgSliderData.map((data,index) =>
                      <img src={data.img} alt="img" className="rounded-md min-w-max w-[255px] h-[160px] inline-block object-cover" key={index} />
                )}
              </div>
            <button className="z-20 text-white absolute right-0 top-0 bottom-0 -rotate-90" onClick={()=> slide("right")}><HiOutlineArrowDown size={35}/></button> 
          </div>
          {/*End Image Slider */}

          {/* Announcement */}
          <div className="mt-[20px] space-y-3 dark:text-[#848e9c] text-gray-500 text-[14px]">
            <div>
            <a href="#" className="inline-block group">
              <div className="flex gap-2 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-[20px] h-[20px] group-hover:text-[#fcd535] ">
                <path fill="currentColor" fillRule="evenodd" d="M4.002 7H16l4-4v16l-4-4h-4v6H7v-6H4.002V7z" clipRule="evenodd"></path>
              </svg>
               <span className="group-hover:text-[#fcd535]">This is not the official website of BINANCE!</span>
               </div>
            </a>
            </div>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="css-t6hc3c" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                <path fill="currentColor" fillRule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" clipRule="evenodd"></path>
              </svg>
              <div className="flex gap-3">
              <span>Binance Clone! </span>
              <a href="#" className="dark:text-[#fcd535] text-yellow-500">More</a>
              </div>
            </div>
            <div>
            <div  className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="css-t6hc3c" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                <path fill="currentColor" fillRule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" clipRule="evenodd"></path>
              </svg>
              <div className="flex gap-3">
                <span>Technology used: React and Tailwind CSS! </span>
                <a href="#" className="dark:text-[#fcd535] text-yellow-500">More</a>
              </div>
            </div>
            </div>
          </div>
          {/* End Announcement */}
      </div>
      <TradeAnywhere />
      <Touch />
      <StartTrading />
  </div>
};

export default OtherInfo;
