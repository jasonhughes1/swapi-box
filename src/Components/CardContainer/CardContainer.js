import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardType, setFavorite }) => {
  console.log(cardType);
  if(cardType.length > 0) {
    const cards = cardType.map((card, index) =>
    <Card cardData={card} key={index} setFavorite={setFavorite}/>
  )

  return (
    <div className='card-container'>
      {cards}
    </div>
  )

  } else {
    return (
      <h2 className='select-favs'>Please select favorites...</h2>
    )
  }
}

export default CardContainer;
