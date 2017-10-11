import React from 'react';
import './Button.css';

const Button = ({ buttonText, className, num, btnFn }) => {

  return (
    <button className={`${className}`} onClick={() => btnFn(num)}>{buttonText}</button>
  )

}

export default Button;
