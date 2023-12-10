import { FC } from "react";
import Logo from "../../UI/Logo";
import styled from "styled-components";
import Navigation from "../navigation/Navigation";
import Button from "../../UI/Button";
import { Icons } from "../../UI/Icons";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(30, 30, 30, 0.48);
  padding: 13px 80px;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

const ControlItems = styled.div`
  display: flex;
  gap: 12px;
`;

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <ControlItems>
        <Button handleClick={() => navigate("/favorites")}>
          <Icons.heart />
        </Button>
        <Button color="primary" handleClick={() => navigate("/")}>
          Sign in
        </Button>
      </ControlItems>
    </StyledHeader>
  );
};

export default Header;
