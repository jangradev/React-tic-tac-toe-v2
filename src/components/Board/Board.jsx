import { useState } from 'react';
import Square from '../Square/Square';

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         return squares[a];
      }
   }
   return null;
}
export function Board({ xIsNext, squares, onPlay }) {
   function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
         return;
      }
      const updatedArray = squares.slice();
      if (xIsNext) {
         updatedArray[i] = 'X';
      } else {
         updatedArray[i] = 'O';
      }
      if (typeof onPlay === 'function') {
         onPlay(updatedArray);
      } else {
         return null;
      }
   }

   let winner = calculateWinner(squares);
   let status;
   if (winner) {
      status = 'Winner: ' + winner === 'X' ? 'player-1' : 'player-2';
   } else {
      status = 'Next player: ' + (xIsNext ? 'Player-1' : 'Player-2');
   }
   return (
      <>
         <div style={{ textAlign: 'center' }} className='status'>
            {winner ? null : status}
         </div>
         <div className='board-row'>
            {winner
               ? `🏆 Game win by  ${
                    winner === 'X' ? 'Player-1' : 'Player-2'
                 } 🏆`
               : null}
         </div>
         <div className='board-row'>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
         </div>
         <div className='board-row'>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
         </div>
         <div className='board-row'>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
         </div>
      </>
   );
}
