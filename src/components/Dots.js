import React from 'react';

const Dots = ({ activeIndex, onClickSlide, sliderImage }) => {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={slide.id}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onClickSlide(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
