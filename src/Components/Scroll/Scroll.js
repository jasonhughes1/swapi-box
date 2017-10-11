import React from 'react';
import './Scroll.css';
import Button from '../Button/Button';

const Scroll = ({data}) => {
  const randomIndex = Math.floor(Math.random() * (6 - 0 + 1))
  const text = data[randomIndex].Opening

  const favoriteStyles = {
    marginRight: 50
  }
  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
          <Button className={' button favorite'} buttonText='View Favorites' />
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroll;
