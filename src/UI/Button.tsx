import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "basic";
  handleClick: () => void;
  background?: string;
};

export const ButtonStyled = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement> & { background?: string }
>`
  --backgroundColor: ${(props) =>
    props.background
      ? props.background
      : props.color === "basic"
      ? "var(--basic)"
      : "var(--primary)"};
  background: var(--backgroundColor);
  color: #000;
  border-radius: 0px;
  font-family: "Syne", sans-serif;
  border: none;
  padding: 12px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

const Button: FC<ButtonProps> = ({
  children,
  color = "basic",
  handleClick,
  background,
}) => {
  return (
    <ButtonStyled {...{ color, background }} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
