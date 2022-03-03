import React from 'react'
import useDarkMode  from '../hooks/useDarkMode';
import {NavSideData} from '../data/data';
const ThemeToggle = () => {

    const [colorTheme, setTheme] = useDarkMode();
  
    console.log(colorTheme);
  return <div className="xl:flex xl:items-center xl:justify-center w-full ">
        
            {NavSideData.map((data,index) => 
            <button onClick={() => setTheme(colorTheme)} className="flex items-center gap-2 w-full" key={index}>
                {data?.item === 'Theme' &&
                <>
                    <span> {colorTheme !== 'light' ? data?.icon1 : data?.icon2}</span>
                    <span className="xl:hidden ">{colorTheme !== 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </>
         
                }
            </button> 
            )}
    </div>
  
}

export default ThemeToggle