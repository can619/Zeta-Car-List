import { useState } from 'react';
import './Page.css';
function Page({page, decrementPage, incrementPage}){

  function handlePrevClick(e){
    if (page === 1){
      e.preventDefault()
    }
    else{
      decrementPage();
    }
  }

  return (
    <div className='page'>
      <button className='page-prev' onClick={handlePrevClick} style={{color: page === 1 ? 'grey' : 'red'}}>Prev</button>
        <div className='page-number' >{page}</div>
      <button className='page-next'>Next</button>
    </div>
  )
}

export default Page;