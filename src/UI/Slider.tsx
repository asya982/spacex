import React, { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type SliderProps = {
  children: React.ReactChild[];
  props?: typeof Carousel;
};

const Slider: FC<SliderProps> = ({ children, ...props }) => {
  return (
    <Carousel animationHandler={"fade"} infiniteLoop {...props}>
      {children}
    </Carousel>
  );
};

export default Slider;
