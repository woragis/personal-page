import { useSelector } from "react-redux";
import { useNavbarModel } from "./model";
import {
  NavLink,
  NavLinkItem,
  NavLinksContainer,
  StyledNavbar,
} from "./styles";
import { RootState } from "../../redux/store";

export const NavbarView = ({ navLinks }: ReturnType<typeof useNavbarModel>) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const navigationLinks = navLinks.map(({ title, path }) => {
    return (
      <NavLinkItem>
        <NavLink to={path} color={theme.colors.primary.main}>
          {title}
        </NavLink>
      </NavLinkItem>
    );
  });

  return (
    <StyledNavbar backgroundColor={theme.colors.secondary.light}>
      <NavLinksContainer>{navigationLinks}</NavLinksContainer>
    </StyledNavbar>
  );
};
