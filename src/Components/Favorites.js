import React from 'react';
import ButtonContainer from './ButtonContainer';
import css from '../scss/favorites.css';

const Favorites = () => {
  return (
    <div className="favorites">
      <ButtonContainer />
      <p>Cards of Favorites</p>
    </div>
  )
}

export default Favorites;
