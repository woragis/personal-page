import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface NavLinkProps {
  color: string;
}

interface NavbarProps {
  backgroundColor: string;
}

export const StyledNavbar = styled.nav<NavbarProps>`
  &.sticky {
    padding: 5px 10px;
    background-color: white;
    a {
      color: #000;
    }
  }
  font-family: "Poppins", sans-serif;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 600ms;
  padding: 40px 10px;
`;

export const NavbarLogo = styled.img`
  height: 2em;
  position: relative;
  font-weight: 700;
  margin: 0 50px;
  height: 50px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 600ms;
`;

export const NavLinksContainer = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinkItem = styled.li`
  position: relative;
  list-style: none;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: ${(_) => _.color};
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
  transition: 600ms;
`;

// hero banner
export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  // background: url();
  background-size: cover;
`;
