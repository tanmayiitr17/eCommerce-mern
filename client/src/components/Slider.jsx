import React, { useState } from "react";
import "./Slider.css";
import { sliderItems } from "../data";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider__container">
      <div
        className="slider__arrow slider__arrow-left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="slider__slide"
            style={{ backgroundColor: `#${item.bg}` }}
            key={item.id}
          >
            <div className="slider__img-container">
              <img src={item.img} className="slider__image" />
            </div>
            <div className="slider__info-container">
              <h1 className="slider__title">{item.title}</h1>
              <p className="slider__des">{item.desc}</p>
              <button className="slider__button">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className=" slider__arrow slider__arrow-right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;