import React from 'react';
import './Scroll.css';

const Scroll = ({data}) => {
  const randomIndex = Math.floor(Math.random() * (7 - 0 + 1))
  const text = data[randomIndex].opening_crawl
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

export default Scroll;
