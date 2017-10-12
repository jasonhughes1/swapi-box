import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ buttonText, className, num, btnFn, toggleActive }) => {

  return (
    <button className={`${className}`} onClick={(e) => (btnFn(num), toggleActive(e.currentTarget))}>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  num: PropTypes.number,
  btnFn: PropTypes.func,
  toggleActive: PropTypes.func
}

export default Button;
