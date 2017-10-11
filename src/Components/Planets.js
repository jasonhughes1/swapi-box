import React from 'react';
import ButtonContainer from './ButtonContainer';
import CardContainer from './CardContainer';
import css from '../scss/planets.css';

const Planets = () => {
  return (
    <div className="planets">
      <ButtonContainer />
      <p>Cards of Planets</p>
      <CardContainer />
    </div>
  )
}

export default Planets;
