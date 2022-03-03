import { useEffect,useMemo } from 'react';

const useClickOutside = (ref,setClicked) => {
    useEffect(() =>{
         function click(event){
            if(ref.current && !ref.current.contains(event.target)){
                setClicked("0");
            //    console.log("hooks fired!")
            }
         }  
        document.addEventListener('mousedown', click);

        return () => {
            document.removeEventListener('mousedown', click);
        }
    },[ref,setClicked])
};

export default useClickOutside;
