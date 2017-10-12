import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ cardType, setFavorite }) => {
<<<<<<< HEAD
  if(cardType.length > 0) {
    const cards = cardType.map((card, index) =>
    <Card cardData={card}
      key={index}
      setFavorite={setFavorite} />
  )
=======
  if (cardType.length > 0) {
    const cards = cardType.map((card, index) =>
      <Card cardData={card} key={index} setFavorite={setFavorite}/>
    );
>>>>>>> 65997ec76a12c178be04117c13010154e4300140

    return (
      <div className='card-container'>
        {cards}
      </div>
    );

  } else {
    return (
<<<<<<< HEAD
      <h2 className='select-favs'>There are currently no favorites...</h2>
    )
=======
      <h2 className='select-favs'>Please select favorites...</h2>
    );
>>>>>>> 65997ec76a12c178be04117c13010154e4300140
  }
};

CardContainer.propTypes = {
  cardType: PropTypes.array.isRequired,
  setFavorite: PropTypes.func
};

CardContainer.propTypes = {
  cardType: PropTypes.array.isRequired,
  setFavorite: PropTypes.func,
}

export default CardContainer;
