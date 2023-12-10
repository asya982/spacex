import React, { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, CarouselProps } from "react-responsive-carousel";

type SliderProps = {
  children: React.ReactChild[];
} & Partial<CarouselProps>;

const Slider: FC<SliderProps> = ({ children, ...props }) => {
  return (
    <Carousel
      {...props}
      animationHandler={"fade"}
      infiniteLoop
      showThumbs={false}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
