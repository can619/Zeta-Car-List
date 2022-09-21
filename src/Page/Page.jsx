import { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import './Page.css';
function Page({page, decrementPage, incrementPage}){

  function handlePrevClick(e){
    if (page === 1){
      e.preventDefault()
    }
    else{
      decrementPage();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  function handleNextClick(){
    incrementPage();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='page'>
      <button className='page-prev' onClick={handlePrevClick} style={{color: page === 1 ? 'grey' : 'red'}}>
        <BsChevronCompactLeft/>
        Prev
      </button>
      <div className='page-number'>{page}</div>
      <button className='page-next' onClick={handleNextClick} style={{color:'red'}}>
        Next
        <BsChevronCompactRight />
      </button>
    </div>
  )
}

export default Page;