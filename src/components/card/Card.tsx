import { FC } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { Icons } from "../../UI/Icons";
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
  p {
    color: #556b84;
    font-size: x-small;
    height: 80px;
  }
  padding: 24px 32px;
`;

const Card: FC<CardProps> = ({ description, id, image, name, inFavs }) => {
  return (
    <StyledCard>
      <Image src={image} alt="Tour" />
      <Description>
        <h2>{name}</h2>
        <p>{description}</p>
        <CardControls inFavs={inFavs} itemId={id} />
      </Description>
    </StyledCard>
  );
};

export default Card;
