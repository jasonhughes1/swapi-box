import React from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  const cardKeys = Object.keys(cardData)

  return (
    <article className='card'>
      <div className='card-top'>
        <h3 className='card-title'>{cardData.Name}</h3>
        <button className='favorite-btn'>*</button>
      </div>
      <h4>{cardKeys[1]}: </h4>
      <p>{cardData.Homeworld}</p>
      <h4>{cardKeys[2]}: </h4>
      <p>{cardData.Species}</p>
      <h4>{cardKeys[3]}: </h4>
      <p>{cardData.Population}</p>
    </article>
  )

}

export default Card;
