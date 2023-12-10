import { FC } from "react";
import { navigation } from "../../helpers/navigation";
import NavigationLink from "../../UI/Nav-Link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 32px;
`;

const Navigation: FC = () => {
  return (
    <StyledNav>
      {navigation.map((el, key) => (
        <NavigationLink {...el} key={key} />
      ))}
    </StyledNav>
  );
};

export default Navigation;
