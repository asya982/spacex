import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type NavLinkProps = {
  link: string;
  title: string;
};

const StyledLLink = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  &:hover,
  &.active {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  &:hover {
    color: var(--primary)
  }
`;

const NavigationLink: FC<NavLinkProps> = ({ title, link }) => {
  return <StyledLLink to={link}>{title}</StyledLLink>;
};

export default NavigationLink;
