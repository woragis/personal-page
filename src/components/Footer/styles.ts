import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledFooterSection = styled.footer`
  --color-neutral-0: #0e0c0c;
  --color-neutral-10: #171717;
  --color-neutral-30: #a8a29e;
  --color-neutral-40: #f5f5f5;
  letter-spacing: 1px;
  width: 100%;
  color: var(--color-neutral-40);
`;

export const FooterContent = styled.section`
  background-color: var(--color-neutral-10);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 3.5rem;
  h1 {
    margin-bottom: 0.75rem;
  }
`;
export const FooterContacts = styled.article``;
export const FooterList = styled.article``;
export const FooterListItem = styled.li``;
export const FooterSubscribe = styled.article``;

export const FooterListContainer = styled.ul``;
export const FooterLink = styled(Link)``;
export const SocialMediaLink = styled(FooterLink)``;
export const MenuLink = styled(FooterLink)``;
export const FooterCopyright = styled.p``;
export const WebsiteLinks = styled.ul``;
export const ContactSection = styled.aside``;
