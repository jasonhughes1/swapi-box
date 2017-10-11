import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ cardType }) => {

  const cards = cardType.map((card, index) =>
    <Card cardData={card} key={index} />
  )

  return (
    <div className='card-container'>
      {cards}
    </div>
  )

}

export default CardContainer;
