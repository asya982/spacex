import { FC, Ref } from "react";
import { images } from "../../helpers/images";
import Slider from "../../UI/Slider";
import "./slider.css";
import { Icons } from "../../UI/Icons";
import styled from "styled-components";

type MainSliderProps = {
  tours: Ref<React.MutableRefObject<null>>;
};

const TextArea = styled.section`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.aside`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 44%;
  color: white;
  font-size: x-large;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const MainSlider: FC<MainSliderProps> = ({ tours }) => {
  return (
    <>
      <Slider>
        {images.map((el, index) => (
          <div key={index}>
            <img src={el} alt="rocket" />
            <div className="legend" id="legend">
              <TextArea>
                <h1>THE SPACE IS WAITING FOR</h1>
                <h2 className="bigText">YOU</h2>
              </TextArea>
            </div>
          </div>
        ))}
      </Slider>
      <Controls
        onClick={() =>
          window.scrollTo({
            top: tours?.current?.offsetTop,
            behavior: "smooth",
          })
        }
      >
        <p>Explore tours</p>
        <Icons.arrow />
      </Controls>
    </>
  );
};

export default MainSlider;
