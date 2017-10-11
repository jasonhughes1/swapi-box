import React from 'react';
import { Link } from 'react-router-dom';
import css from '../scss/ButtonContainer.css';

const ButtonContainer = () => {
    return (
      <div>
        <button className='people-button'>
          <Link to='/people'>People</Link>
        </button>
        <button className='vehicles-button'>
          <Link to='/vehicles'>Vehicles</Link>
        </button>
        <button className='planets-button'>
          <Link to='/planets'>Planets</Link>
        </button>
        <button className='favorites-button'>
          <Link to='/favorites'>Favorites</Link>
        </button>
        <button className='home'>
          <Link to='/'>Home</Link>
        </button>

      </div>
    )
  }







export default ButtonContainer;
