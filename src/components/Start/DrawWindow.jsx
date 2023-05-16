const DrawWindow = () => {
   return (
      <div className='draw-msg '>
         <div className='draw'>
            <h1 className='text-center text-yellow'>Draw</h1>
         </div>
         <button id='restartBtn' className='primary-btn'>
            Restart
         </button>
      </div>
   );
};

export default DrawWindow;
