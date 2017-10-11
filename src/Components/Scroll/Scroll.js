import React from 'react';
import './Scroll.css';
import Button from '../Button/Button';

const Scroll = ({ data, opening, btnFn, toggleActive }) => {
  const text = data[opening].Opening
  const filmTitle = data[opening].Title
  const releaseDate = data[opening].Release

  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
          <Button className={' button favorite'} toggleActive={toggleActive} buttonText='View Favorites' btnFn={btnFn} />
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{text}</p>
            <p className='film-title'>{filmTitle}</p>
            <p className='release-date'>{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroll;
