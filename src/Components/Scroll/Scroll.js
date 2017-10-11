import React from 'react';

const Scroll = ({ retrieveData }) => {
  const scrollText = retrieveData('films')

  return (
    <div className='scroll'>
      <p>{scrollText}</p>
    </div>
  )
}

export default Scroll;
