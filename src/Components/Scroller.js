import React from 'react';

const Scroller = (starWarsData) => {

  const indexRandomizer = Math.floor(Math.random() * (5 - 0 + 1))
  const displayScrollText = starWarsData[indexRandomizer]
  console.log('scroller ', starWarsData);
  return (
    <div className="scroller">
      <p>{displayScrollText}</p>
    </div>
  )
}

export default Scroller;
