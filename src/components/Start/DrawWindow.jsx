const DrawWindow = ({ draw, drawHandler }) => {
   //console.log('Received draw----------------------->', draw);
   function handleRestart() {
      // Call the resetSelectedPlayer function from props
      drawHandler(); // Call the drawHandler function to handle the restart
   }
   return (
      <div className={`draw-msg ${draw ? 'show' : ''} `}>
         <div className='draw'>
            <h1 className='text-center text-yellow'>Draw</h1>
         </div>
         <button
            id='restartBtn'
            onClick={handleRestart}
            className='primary-btn'>
            Restart
         </button>
      </div>
   );
};

export default DrawWindow;
