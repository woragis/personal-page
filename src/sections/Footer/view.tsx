import { Link } from "react-router-dom";
import { useFooterModel } from "./model";
import {
  ContactSection,
  FooterCopyright,
  SocialMedia,
  StyledFooterSection,
} from "./styles";

export const FooterView = ({
  footerText,
  websiteLinks,
  socialMediaLinks,
}: ReturnType<typeof useFooterModel>) => {
  const websiteLinksComponent = websiteLinks.map(({ title, path }) => {
    return (
      <li>
        <Link to={path}>{title}</Link>
      </li>
    );
  });
  const socialMediaLinksComponent = socialMediaLinks.map(
    ({ title, path, icon }) => {
      return (
        <li>
          <Link to={path}>
            {icon} {title}
          </Link>
        </li>
      );
    }
  );

  return (
    <StyledFooterSection>
      <div>{footerText}</div>

      <SocialMedia>{websiteLinksComponent}</SocialMedia>
      <SocialMedia>{socialMediaLinksComponent}</SocialMedia>
      <FooterCopyright>
        All Rights reserved to woragis - 2024 &copy;
      </FooterCopyright>
      <ContactSection>
        <form method="post">
          <input type="text" placeholder="Titulo da Mensagem" />
          <textarea placeholder="Corpo da mensagem"></textarea>
          <button>Enviar</button>
        </form>
      </ContactSection>
    </StyledFooterSection>
  );
};
