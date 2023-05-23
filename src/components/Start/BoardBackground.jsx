import { useState, useEffect } from 'react';

import Square from '../Square/Square';
import DrawWindow from './DrawWindow';

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
   const showWinner = useShowWindow(winner, 1500);
   const showDraw = useShowWindow(draw, 1500);

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
         {showWinner && (
            <WinnerWindow winner={winner} showHandler={showHandler} />
         )}
         {showDraw && <DrawWindow draw={draw} showHandler={showHandler} />}
      </>
   );
};
export default BoardBackground;
