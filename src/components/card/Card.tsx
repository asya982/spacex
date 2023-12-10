import { FC } from "react";
import styled from "styled-components";
import CardControls from "./Card-controls";

type CardProps = {
  image: string;
  description: string;
  id: string;
  name: string;
  inFavs?: boolean;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  border: 1px solid var(--primary);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  padding: 24px 32px;

    h2 {
        height: 80px;
    }

  p {
    color: #556b84;
    font-size: small;
    height: 150px;
  }
`;

const Card: FC<CardProps> = ({ description, id, image, name, inFavs }) => {
  return (
    <StyledCard>
      <Image src={image} alt="Tour" />
      <Description>
        <h2>{name}</h2>
        <p>{description}</p>
        <CardControls inFavs={inFavs} item={{ id, name, description }} />
      </Description>
    </StyledCard>
  );
};

export default Card;
