import React, { useEffect, useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import images from './images';
import SliderContent from './SliderContent';
import './slider.css';

const len = images.length - 1;

const Slider = () => {
  const [activSlide, setActivSlider] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onClickSlide = (activSlide) => setActivSlider(activSlide);
  const prevSlide = () => {
    setActivSlider(activSlide < 1 ? len : activSlide - 1);
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000);

    console.log('clic');
  };
  const nextSlide = () => {
    setActivSlider(activSlide === len ? 0 : activSlide + 1);
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000);
  };

  return (
    <div id="slide" className="slider-container">
      <SliderContent activeIndex={activSlide} sliderImage={images} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} disabled={disabled} />
      <Dots activeIndex={activSlide} sliderImage={images} onClickSlide={onClickSlide} />
    </div>
  );
};

export default Slider;
