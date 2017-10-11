import React from 'react';



const Scroller = ({ data, opening }) => {
  const text = data[opening].Opening
  const filmTitle = data[opening].Title
  const releaseDate = data[opening].Release

  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
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

export default Scroller;
