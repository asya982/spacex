import { FC } from "react";
import { images } from "../../helpers/images";
import Slider from "../../UI/Slider";
import "./slider.css";

const MainSlider: FC = () => {
  return (
    <Slider>
      {images.map((el, index) => (
        <div>
          <img src={el} key={index} alt="rocket" />
          <div className="legend" id="legend">
            <h1>THE SPACE IS WAITING FOR YOU</h1>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MainSlider;
