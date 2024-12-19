import { useSelector } from "react-redux";
import { useNavbarModel } from "./model";
import {
  NavbarLogo,
  NavLink,
  NavLinkItem,
  NavLinksContainer,
  StyledNavbar,
} from "./styles";
import { RootState } from "../../redux/store";
import LanguageSwitcher from "../LanguageSwitcher";

export const NavbarView = ({
  navLinks,
  navLogo,
}: ReturnType<typeof useNavbarModel>) => {
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

  window.addEventListener("scroll", () => {
    let header = document.querySelector(".navbar");
    header?.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <StyledNavbar
      backgroundColor={theme.colors.secondary.light}
      className="navbar"
    >
      <NavbarLogo src={navLogo} />
      <NavLinksContainer>
        {navigationLinks}
        <LanguageSwitcher />
      </NavLinksContainer>
    </StyledNavbar>
  );
};
