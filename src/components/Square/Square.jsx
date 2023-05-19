export default function Square({ value, onSquareClick, highlight }) {
   //console.log('highlight------------>', highlight);
   return (
      <button
         className={`block ${value} ${highlight ? 'highlight' : ''}`}
         onClick={onSquareClick}></button>
   );
}
