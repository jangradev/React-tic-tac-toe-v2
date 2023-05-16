const Winner = () => {
   return (
      <div className='winner-msg'>
         <h1 className='text-center text-yellow'>Winner</h1>
         <div className='winner'></div>
         <button id='restartBtn' className='primary-btn'>
            Restart
         </button>
      </div>
   );
};

export default Winner;
