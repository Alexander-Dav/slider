import React from 'react';

const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={slide.id} className={index === activeIndex ? 'slides active' : 'inactive'}>
          <img id="slide" className="slide-image img_vis" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
