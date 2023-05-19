import React, { useRef, useEffect, useState } from 'react';
import './StartPages.css';
import female1 from '../../assest/f1.png';
import female2 from '../../assest/f2.png';
import male1 from '../../assest/m1.png';
import male2 from '../../assest/m2.png';
import BoardBackground from './BoardBackground';

import Winner from '../Winner/CalculateWinner';

// x---female
// y---male

export default function StartPage() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isNext, setIsNext] = useState(true);
   const [selectedPlayer, setSelectedPlayer] = useState('');

   const imgRef = useRef([]);
   const startBtnRef = useRef(null);
   const startClassRef = useRef(null);

   function startGameHandle(ref) {
      startClassRef.current.classList.add('hide');
   }

   useEffect(() => {
      // Remove the "selected" class when the component re-renders
      imgRef.current.forEach((ref) => {
         if (ref.classList.contains('selected')) {
            ref.classList.remove('selected');
         }
      });
   });

   function handleClick1(ref) {
      const index = imgRef.current.indexOf(ref);
      if (index !== -1) {
         const element = imgRef.current[index];
         setSelectedPlayer(element.id);
         if (element.classList.contains('selected')) {
            element.classList.add('disable-hover');
            element.classList.add('selected');
         } else {
            // Remove the "selected" class from all other images
            imgRef.current.forEach((img) => img.classList.remove('selected'));
            element.classList.add('selected');
         }
      }
   }
   const playerMapping = {
      y: { player1: 'y', player2: 'x' },
      y2: { player1: 'y2', player2: 'x2' },
      x: { player1: 'x', player2: 'y' },
      x2: { player1: 'x2', player2: 'y2' },
   };

   const { player1 = 'x', player2 = 'y' } = playerMapping[selectedPlayer] || {};

   function handleClick(i) {
      if (squares[i] || winner) {
         return;
      }
      const nextSquares = squares.slice();
      if (isNext) {
         nextSquares[i] = player1;
      } else {
         nextSquares[i] = player2;
      }
      setSquares(nextSquares);
      setIsNext(!isNext);
   }
   let { line, winner, draw } = Winner(squares);
   // console.log('winner', winner);
   // console.log('lines', line);
   // console.log('draw.......', draw);

   function showHandler() {
      //console.log('reset--------------------');
      winner = null;
      setSquares(Array(9).fill(null));
      startClassRef.current.classList.remove('hide');
   }

   function drawHandler() {
      ///console.log('Draw--------------------');
      winner = null;
      setSquares(Array(9).fill(null));
      startClassRef.current.classList.remove('hide');
   }

   return (
      <div>
         <div className='start-game' ref={startClassRef}>
            <h1 className='text-light'>Select Character</h1>
            <div className='profile'>
               <div className='img'>
                  <img
                     src={female1}
                     className={`${
                        imgRef.current[0]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     } ${selectedPlayer === 'x' && 'disable-hover'}`}
                     id='x'
                     alt='female-1'
                     ref={(ref) => (imgRef.current[0] = ref)}
                     onClick={() => handleClick1(imgRef.current[0])}
                  />
                  <img
                     src={male1}
                     className={`${
                        imgRef.current[1]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     } ${selectedPlayer === 'y' && 'disable-hover'}`}
                     id='y'
                     alt='male-1'
                     ref={(ref) => (imgRef.current[1] = ref)}
                     onClick={() => handleClick1(imgRef.current[1])}
                  />
               </div>
               <div className='img'>
                  <img
                     src={female2}
                     className={`${
                        imgRef.current[2]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     } ${selectedPlayer === 'x2' && 'disable-hover'}`}
                     id='x2'
                     alt='female-2'
                     ref={(ref) => (imgRef.current[2] = ref)}
                     onClick={() => handleClick1(imgRef.current[2])}
                  />
                  <img
                     src={male2}
                     className={`${
                        imgRef.current[3]?.classList?.contains('selected')
                           ? 'selected'
                           : 'id'
                     } ${selectedPlayer === 'y2' && 'disable-hover'}`}
                     id='y2'
                     alt='male-2'
                     ref={(ref) => (imgRef.current[3] = ref)}
                     onClick={() => handleClick1(imgRef.current[3])}
                  />
               </div>
            </div>
            <button
               className='primary-btn'
               id='start-btn'
               ref={startBtnRef}
               onClick={() => startGameHandle(startBtnRef.current)}>
               Start Game
            </button>
         </div>

         <BoardBackground
            selectedPlayer={selectedPlayer}
            handleClick={handleClick}
            player1={player1}
            player2={player2}
            squares={squares}
            isNext={isNext}
            winner={winner}
            line={line}
            showHandler={showHandler}
            drawHandler={drawHandler}
            draw={draw}
         />
      </div>
   );
}
