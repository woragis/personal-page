import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface NavLinkProps {
  color: string;
}

interface NavbarProps {
  backgroundColor: string;
}

export const StyledNavbar = styled.nav<NavbarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NavbarLogo = styled.img`
  height: 100%;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

export const NavLinkItem = styled.li`
  &:hover {
    transform: translateY(10px);
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: ${(_) => _.color};
`;
