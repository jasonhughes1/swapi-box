import React from 'react';
import './Button.css';

const Button = ({ buttonText, className, num, btnFn, toggleActive }) => {

  return (
    <button className={`${className}`} onClick={(e) => (btnFn(num), toggleActive(e.currentTarget))}>{buttonText}</button>
  )

}

export default Button;
