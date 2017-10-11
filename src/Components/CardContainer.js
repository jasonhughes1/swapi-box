import React from 'react';
import Cards from './Cards';

const CardContainer = () => {
  return (
    <div className='card-container'>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default CardContainer;

//Probably going to house this when a specific button is clicked
//Not sure if we are going to componentDidMount()
