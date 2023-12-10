import { FC } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const NotFoundText = styled.h1`
  font-size: 10rem;
  color: var(--primary);
  padding: 20px;
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const NotFoundPage: FC = () => {
    const navigate = useNavigate()
  return (
    <Container>
      OOP! Page was not found!
      <NotFoundText>404</NotFoundText>
      <p>We are sorry, but requested page was not found</p>
      <Button handleClick={()=> navigate('/')}>Go to main page</Button>
    </Container>
  );
};

export default NotFoundPage;
