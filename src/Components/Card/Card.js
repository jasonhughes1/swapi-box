import React from 'react';

const Card = ({ cardData }) => {
  const cardKeys = Object.keys(cardData)

  return (
    <article className='card'>
      <button></button>
      <h3>{cardData.Name}</h3>
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
