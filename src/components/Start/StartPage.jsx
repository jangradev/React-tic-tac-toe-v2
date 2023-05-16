import React, { useRef, useEffect } from 'react';
import './StartPages.css';
import female1 from '../../assest/f1.png';
import female2 from '../../assest/f2.png';
import male1 from '../../assest/m1.png';
import male2 from '../../assest/m2.png';
import BoardBackground from './BoardBackground';
import DrawWindow from './DrawWindow';

export default function StartPage() {
   const imgRef = useRef([]);

   useEffect(() => {
      console.log(imgRef.current);
   }, []);

   function handleClick(ref) {
      console.log(ref);
      const index = imgRef.current.indexOf(ref);
      console.log('index--', index);
      if (index !== -1) {
         const element = imgRef.current[index];
         // console.log('element', element);
         // if (element.classList.contains('selected')) {
         //    element.classList.remove('selected');
         // } else {
         //    element.classList.add('selected');
         // }
         element.classList.toggle('selected');
      }
   }

   return (
      <div>
         <div className='start-game'>
            <h1 className='text-light'>Select Character</h1>
            <div className='profile'>
               <div className='img'>
                  <img
                     src={female1}
                     className={
                        imgRef.current[0]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     }
                     id='x'
                     alt=''
                     ref={(ref) => (imgRef.current[0] = ref)}
                     onClick={() => handleClick(imgRef.current[0])}
                  />
                  <img
                     src={male1}
                     className={
                        imgRef.current[1]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     }
                     id='y'
                     alt=''
                     ref={(ref) => (imgRef.current[1] = ref)}
                     onClick={() => handleClick(imgRef.current[1])}
                  />
               </div>
               <div className='img'>
                  <img
                     src={female2}
                     className={
                        imgRef.current[2]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     }
                     id='x2'
                     alt=''
                     ref={(ref) => (imgRef.current[2] = ref)}
                     onClick={() => handleClick(imgRef.current[2])}
                  />
                  <img
                     src={male2}
                     className={
                        imgRef.current[3]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     }
                     id='y2'
                     alt=''
                     ref={(ref) => (imgRef.current[3] = ref)}
                     onClick={() => handleClick(imgRef.current[3])}
                  />
               </div>
            </div>
            <button className='primary-btn' id='start-btn'>
               Start Game
            </button>
         </div>
         <BoardBackground />
         <DrawWindow />
      </div>
   );
}
