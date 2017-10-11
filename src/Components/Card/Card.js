import React from 'react';
import './Card.css';

const Card = ({ cardData, setFavorite, toggleActive }) => {
  const cardKeys = Object.keys(cardData)
  const cards = cardKeys.map((prop, i) => {
    const card = cardData[propReturn(prop)]

    return (
      <div key={i}>
        <h3>{prop}</h3>
        <p>{card}</p>
      </div>
    )
  })

  function propReturn(prop) {
    if (prop === 'Residents') {
      cardData.Residents = cardData.Residents.map(resident => resident.name + ' ')
      return prop
    } else {
      return prop
    }
  }

  return (
    <article className='card'>
      <button className='favorite-btn' toggleActive={toggleActive} onClick={() => setFavorite(cardData)}>Favorite</button>
      { cards }
    </article>
  )

}

export default Card;
