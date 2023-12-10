import { FC } from "react";
import Logo from "../../UI/Logo";
import styled from "styled-components";
import Navigation from "../navigation/Navigation";
import Button from "../../UI/Button";
import { Icons } from "../../UI/Icons";
import { useLocation, useNavigate } from "react-router-dom";

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

const ControlItems = styled.aside`
  display: flex;
  gap: 12px;
`;

const Header: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const heartLink = pathname.endsWith("favorites") ? ["#DD377D", "white"] : [];

  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <ControlItems>
        <Button
          handleClick={() => navigate("/favorites")}
          background={heartLink[0]}
        >
          <Icons.heart fill={heartLink[1]} />
        </Button>
        <Button color="primary" handleClick={() => {}}>
          Sign in
        </Button>
      </ControlItems>
    </StyledHeader>
  );
};

export default Header;
