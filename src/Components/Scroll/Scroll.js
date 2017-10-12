import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Scroll = ({ data, opening, btnFn, toggleActive, numFav }) => {
<<<<<<< HEAD
  const text = data[opening].Opening
  const filmTitle = data[opening].Title
  const releaseDate = data[opening].Release
=======
  const text = data[opening].Opening;
  const filmTitle = data[opening].Title;
  const releaseDate = data[opening].Release;
>>>>>>> 65997ec76a12c178be04117c13010154e4300140

  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>

          <h1 className='title'>STAR WARS</h1>

          <Button className={' button favorite'}
            toggleActive={toggleActive}
            buttonText={'View Favorites ' +   numFav}
            btnFn={btnFn} />
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{text}</p>
            <p className='film-title'>{filmTitle}</p>
            <p className='release-date'>{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  data: PropTypes.array.isRequired,
  opening: PropTypes.number.isRequired,
  btnFn: PropTypes.func,
  toggleActive: PropTypes.func,
  numFav: PropTypes.number
};

export default Scroll;
