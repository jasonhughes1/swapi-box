import React from 'react';
import ButtonContainer from './ButtonContainer';
import CardContainer from './CardContainer';
import css from '../scss/people.css';


const People = () => {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }
  return (
    <div className="people">
      <ButtonContainer />
      <p>Cards of People</p>
      <CardContainer />
    </div>
  )
}

export default People;
