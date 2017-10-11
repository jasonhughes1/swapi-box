import React from 'react';
import '../scss/Scroller.scss';

const Scroller = ({data}) => {
  const generateRandomIndex = Math.floor(Math.random() * (7 - 0 + 1))
  const text = data[generateRandomIndex].opening_crawl
  return (
    <div>
      <div className='fade'></div>
      <div className='star-wars'>
        <div className='crawl'>
          <p className='crawl-text'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Scroller;
