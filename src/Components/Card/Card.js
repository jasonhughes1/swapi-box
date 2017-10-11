import React from 'react';

const Card = () => {

  return (
    <article>
      <button></button>
      <h3>{name}</h3>
      <h4>homeworld: </h4>
      <p>{homeworld}</p>
      <h4>species: </h4>
      <p>{species}</p>
      <h4>language: </h4>
      <p>{language}</p>
      <h4>population: </h4>
      <p>{population}</p>
    </article>
  )

}

export default Card;
