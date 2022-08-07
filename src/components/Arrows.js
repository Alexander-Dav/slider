import React from 'react';

const Arrows = ({ prevSlide, nextSlide, disabled }) => {
  console.log('dias', disabled);
  return (
    <div className="arrows">
      <button className="prev" disabled={disabled} onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" disabled={disabled} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Arrows;
