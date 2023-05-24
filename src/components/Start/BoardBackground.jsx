import Square from '../Square/Square';
import DrawWindow from './DrawWindow';
import { useState, useEffect } from 'react';
import WinnerWindow from './WinnerWindow';
import useShowWindow from '../customHooks/useShowWindow';

const BoardBackground = ({
   player1,
   player2,
   squares,
   isNext,
   onSquareClick,
   winner,
   line,
   showHandler,
   draw,
}) => {
   // const [showWinnerWindow, setShowWinnerWindow] = useState(false);
   // const [showDrawWindow, setShowDrawWindow] = useState(false);

   // useEffect(() => {
   //    let winnerTimeoutId;
   //    let drawTimeoutId;

   //    if (winner) {
   //       setShowWinnerWindow(false);

   //       winnerTimeoutId = setTimeout(() => {
   //          setShowWinnerWindow(true);
   //       }, 1000); // Change the delay time as desired
   //    }

   //    if (draw) {
   //       setShowDrawWindow(false);

   //       drawTimeoutId = setTimeout(() => {
   //          setShowDrawWindow(true);
   //       }, 1000); // Change the delay time as desired
   //    }

   //    return () => {
   //       console.log('timer', winnerTimeoutId);
   //       clearTimeout(winnerTimeoutId);
   //       clearTimeout(drawTimeoutId);
   //    };
   // }, [winner, draw]);

   // console.log('Show-->', showWinnerWindow);

   let showWinnerWindow = useShowWindow(winner, 1500);
   let showDrawWindow = useShowWindow(draw, 1500);

   return (
      <>
         <div className={`container`}>
            <div
               className={`board ${isNext ? player1 : player2} ${
                  winner ? 'hide' : ''
               }`}
               id='board'>
               {squares.map((value, index) => (
                  <Square
                     key={index}
                     value={value}
                     onSquareClick={() => onSquareClick(index)} // passing function
                     highlight={line && line.includes(index)} // Check if index is in the line array
                  />
               ))}
            </div>
         </div>
         {showWinnerWindow && (
            <WinnerWindow winner={winner} showHandler={showHandler} />
         )}
         {showDrawWindow && (
            <DrawWindow draw={draw} showHandler={showHandler} />
         )}
      </>
   );
};
export default BoardBackground;
