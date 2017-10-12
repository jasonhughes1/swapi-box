import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ cardType, setFavorite }) => {
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

CardContainer.propTypes = {
  cardType: PropTypes.array.isRequired,
  setFavorite: PropTypes.func,
}

export default CardContainer;
