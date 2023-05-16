const BoardBackground = (prop) => {
   const { female1Id, male1Id, female2Id, male2Id } = prop;
   return (
      <div className='container'>
         <div className='board x2' id='board'>
            <div className='block ' data-cell></div>
            <div className='block ' data-cell></div>
            <div className='block ' data-cell></div>
            <div className='block ' data-cell></div>
            <div className='block' data-cell></div>
            <div className='block' data-cell></div>
            <div className='block ' data-cell></div>
            <div className='block ' data-cell></div>
            <div className='block ' data-cell></div>
         </div>
      </div>
   );
};

export default BoardBackground;
