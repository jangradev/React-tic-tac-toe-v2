import { useState, Link } from 'react';
import { Board } from '../Board/Board';

export default function Game() {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [currentMove, setCurrentMove] = useState(0);
   const xIsNext = currentMove % 2 === 0;
   const currentSquares = history[currentMove];

   function handlePlay(nextSquares) {
      console.log(currentMove);

      const lastHistory = history.slice(0, currentMove + 1);
      const nextHistory = [...lastHistory, nextSquares];
      //const nextHistory = [...history, nextSquares];
      console.log('History--', lastHistory);
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
   }

   function jumpTo(nextMove) {
      setCurrentMove(nextMove);
   }

   const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
         description = 'Go to move #' + move;
      } else {
         description = 'Go to game start';
      }
      return (
         <li key={move}>
            <button
               onClick={() => {
                  jumpTo(move);
               }}>
               {description}
            </button>
         </li>
      );
   });

   return (
      <div className='game'>
         <div className='game-board'>
            <Board
               xIsNext={xIsNext}
               squares={currentSquares}
               onPlay={handlePlay}
            />
         </div>
         <div className='game-info'>
            <ol>{moves}</ol>
         </div>
         <img src='tic-tac-toe-dev/src/assest/f1.png' alt='check' />
      </div>
   );
}
