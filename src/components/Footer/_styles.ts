import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledFooterSection = styled.footer`
  position: relative;
  width: 100%;
  background-color: #3586ff;
  padding: 20px 50px;
  min-height: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterListContainer = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const FooterListItem = styled.li`
  list-style: none;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
`;

export const SocialMediaLink = styled(FooterLink)`
  font-size: 2em;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const MenuLink = styled(FooterLink)`
  font-size: 1.2em;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export const FooterCopyright = styled.p`
  text-align: center;
  margin: 15px auto 10px;
  font-size: 1.1rem;
`;

export const Waves = styled.div``;
export const Wave = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  // background: #f00 url(wave.png);
  background-size: 1000px 190px;
`;

export const WebsiteLinks = styled.ul``;

export const ContactSection = styled.aside``;
