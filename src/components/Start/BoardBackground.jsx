import { useState, useEffect } from 'react';

import Square from '../Square/Square';
import DrawWindow from './DrawWindow';

import WinnerWindow from './WinnerWindow';

const BoardBackground = ({
   player1,
   player2,
   squares,
   isNext,
   handleClick,
   winner,
   line,
   showHandler,
   drawHandler,
   draw,
}) => {
   const [showWinner, setShowWinner] = useState(false);
   const [showDraw, setShowDraw] = useState(false);
   useEffect(() => {
      if (winner) {
         // Delay showing the winner for 1.5 seconds
         const delay = setTimeout(() => {
            setShowWinner(true);
         }, 1500);

         return () => clearTimeout(delay);
         // Clear the timeout if the component unmounts or winner changes
      }
   }, [winner]);

   useEffect(() => {
      if (draw) {
         // Delay showing the winner for 1.5 seconds
         const delay = setTimeout(() => {
            setShowDraw(true);
         }, 1500);

         return () => clearTimeout(delay);
         // Clear the timeout if the component unmounts or winner changes
      }
   }, [draw]);

   useEffect(() => {
      // Reset showWinner state when the game is restarted
      setShowWinner(false);
      setShowDraw(false);
   }, [squares]);

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
                     onSquareClick={() => handleClick(index)}
                     highlight={line && line.includes(index)} // Check if index is in the line array
                  />
               ))}
            </div>
         </div>
         {showWinner && (
            <WinnerWindow winner={winner} showHandler={showHandler} />
         )}
         {showDraw && <DrawWindow draw={draw} drawHandler={drawHandler} />}
      </>
   );
};
export default BoardBackground;
