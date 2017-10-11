import React from 'react';

const Card = ({ cardData, setFavorite }) => {
  const cardKeys = Object.keys(cardData)

  return (
    <article className='card'>
      <button onClick={() => setFavorite(cardData)}>Favorite</button>
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
