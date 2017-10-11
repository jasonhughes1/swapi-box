import React from 'react';
import ButtonContainer from './ButtonContainer';
import CardContainer from './CardContainer';
import css from '../scss/vehicles.css';

const Vehicles = () => {
  return (
    <div className="vehicles">
      <ButtonContainer />
      <p>Cards of Vehicles</p>
      <CardContainer />
    </div>
  )
}

export default Vehicles;
