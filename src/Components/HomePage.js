import React from 'react';
import ButtonContainer from './ButtonContainer';
import Scroller from './Scroller';
import css from '../scss/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <ButtonContainer />
      <Scroller />
    </div>
  )
}

export default HomePage;
