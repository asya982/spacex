import React, { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "basic";
  handleClick: () => void;
  additionalStyle?: string;
};

const ButtonStyled = styled.button`
  background: ${(props) =>
    props.color === "basic" ? "var(--basic)" : "var(--primary)"};
  color: #000;
  border-radius: 0px;
  font-family: "Syne", sans-serif;
  border: none;
  padding: 12px;
  text-transform: uppercase;

`;

const Button: FC<ButtonProps> = ({
  children,
  color = "basic",
  handleClick,
  additionalStyle,
}) => {
  return (
    <ButtonStyled {...{ color, additionalStyle }} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
