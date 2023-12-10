import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Caroulsel.css";
import Loader from "../Loader";
import { Navigation } from "swiper/modules";
import { ButtonStyled } from "../Button";

type CarouselProps = {
  items: React.ReactNode[];
  title: string;
  isLoading: boolean;
};

const Carousel: FC<CarouselProps> = ({ items, isLoading, title }) => {
  return (
    <div>
      {isLoading ? (
        <div className="loaderContainer">
          <Loader />
        </div>
      ) : (
        <>
          <h2 className="title">
            {`${title}`}
            <div className="controls">
              <ButtonStyled
                color="basic"
                className={`swiperButton swiperButtonPrev prev`}
              >{`<`}</ButtonStyled>
              <ButtonStyled
                color="basic"
                className={`swiperButton swiperButtonPrev next`}
              >{`>`}</ButtonStyled>
            </div>
          </h2>
          <Swiper
            loop={true}
            centeredSlides
            navigation={{
              prevEl: `.prev`,
              nextEl: `.next`,
            }}
            slidesPerView={3}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1016: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {items.map((el, index) => (
              <SwiperSlide className="slide" key={index}>
                {el}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Carousel;
