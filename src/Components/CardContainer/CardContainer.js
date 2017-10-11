import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardType, setFavorite }) => {

  const cards = cardType.map((card, index) =>
    <Card cardData={card} key={index} setFavorite={setFavorite}/>
  )

  return (
    <div className='card-container'>
      {cards}
    </div>
  )

}

export default CardContainer;
