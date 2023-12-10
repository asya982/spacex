import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_ALL_ROCKETS } from "../API/rocketsAPI";
import styled from "styled-components";
import MainSlider from "../components/MainSlider/MainSlider";
import Slider from "../UI/Slider";
import Card from "../components/card/Card";
import Loader from "../UI/Loader";
import { images } from "../helpers/images";
import { RocketType } from "../types/rockets";

const CardSection = styled.div``;

const MainPage: FC = () => {
  const { loading, data } = useQuery(GET_ALL_ROCKETS) as {
    loading: boolean;
    data: { rockets: RocketType[] };
  };

  return (
    <div>
      <MainSlider />
      <CardSection>
        <h2>popular tours</h2>
        {data ? (
          <Slider >
            {data.rockets.map((el, index) => (
              <Card {...el} key={index} image={images[0]} />
            ))}
          </Slider>
        ) : loading ? (
          <Loader />
        ) : null}
      </CardSection>
    </div>
  );
};

export default MainPage;
