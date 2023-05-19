export default function Winner(squares) {
   //console.log('Received in Squares', squares);
   const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // verticle
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal check
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         // console.log('lines--->', lines[i]);
         return { line: lines[i], winner: squares[a] } || {};
      }
   }
   const isDraw = squares.filter((square) => !square).length === 0;
   if (isDraw) {
      return { draw: true };
   }
   return {};
}
