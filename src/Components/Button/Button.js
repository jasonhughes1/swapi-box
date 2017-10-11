import React from 'react';
import './Button.css';

const Button = ({ buttonText, className, num, changeCards }) => {

  return (
    <button className={`${className}`} onClick={() => changeCards(num)}>{buttonText}</button>
  )

}

export default Button;
