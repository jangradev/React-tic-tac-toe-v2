const DrawWindow = ({ draw, showHandler, resetShowWindow }) => {
   /*--- if we need to invoked more than 2 or 3 handler then use separate handler ---*/
   // Call the resetSelectedPlayer function from props
   function handleRestart() {
      showHandler(); // Call the drawHandler function to handle the restart
      resetShowWindow();
   }
   return (
      <div className={`draw-msg ${draw ? 'show' : ''} `}>
         <div className='draw'>
            <h1 className='text-center text-yellow'>Draw</h1>
         </div>
         <button id='restartBtn' onClick={showHandler} className='primary-btn'>
            Restart
         </button>
      </div>
   );
};

export default DrawWindow;
