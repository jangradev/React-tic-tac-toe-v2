import { useState, useEffect } from 'react';

const useShowWindow = (value, delayTime) => {
   const [showWindow, setShowWindow] = useState(false);
   useEffect(() => {
      if (value) {
         const delay = setTimeout(() => {
            setShowWindow(true);
         }, delayTime);
         return () => clearTimeout(delay);
      }
   }, [value, delayTime]);
   return showWindow;
};

export default useShowWindow;
