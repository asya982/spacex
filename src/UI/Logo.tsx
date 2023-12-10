import { FC } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  cursor: pointer;
`;

const Logo: FC = () => {
  const navigate = useNavigate();

  return <StyledLogo src={logo} alt="SpaceX" onClick={() => navigate("/")} />;
};

export default Logo;
