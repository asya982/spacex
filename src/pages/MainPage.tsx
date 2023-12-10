import { useQuery } from "@apollo/client";
import { FC, useRef } from "react";
import { GET_ALL_ROCKETS } from "../API/rocketsAPI";
import styled from "styled-components";
import MainSlider from "../components/MainSlider/MainSlider";
import Card from "../components/card/Card";
import { getCardImage } from "../helpers/images";
import { RocketType } from "../types/rockets";
import Carousel from "../UI/carousel/Carousel";

const CardSection = styled.div`
  padding: 4rem 3rem;
`;

const MainPage: FC = () => {
  const { loading, data } = useQuery(GET_ALL_ROCKETS) as {
    loading: boolean;
    data: { rockets: RocketType[] };
  };

  const tours = useRef(null);

  return (
    <div>
      <MainSlider tours={tours} />
      <CardSection ref={tours}>
        <Carousel
          items={data?.rockets?.map((el, index) => (
            <Card {...el} key={index} image={getCardImage(index)} />
          ))}
          title="popular tours"
          isLoading={loading}
        />
      </CardSection>
    </div>
  );
};

export default MainPage;
