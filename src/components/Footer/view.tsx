import { useFooterModel } from "./model";
import {
  FooterContent,
  FooterCopyright,
  FooterListContainer,
  FooterListItem,
  MenuLink,
  SocialMediaLink,
  StyledFooterSection,
} from "./styles";

export const FooterView = ({
  websiteLinks,
  socialMediaLinks,
}: ReturnType<typeof useFooterModel>) => {
  const websiteLinksComponent = websiteLinks.map(({ title, path }) => {
    return (
      <FooterListItem>
        <MenuLink to={path}>{title}</MenuLink>
      </FooterListItem>
    );
  });
  const socialMediaLinksComponent = socialMediaLinks.map(
    ({ title, path, icon }) => {
      return (
        <FooterListItem>
          <SocialMediaLink to={path}>
            {icon} {title}
          </SocialMediaLink>
        </FooterListItem>
      );
    }
  );

  return (
    <StyledFooterSection>
      <FooterContent>
        <FooterListContainer>{websiteLinksComponent}</FooterListContainer>
        <FooterListContainer>{socialMediaLinksComponent}</FooterListContainer>
        <FooterCopyright>
          All Rights reserved to woragis - 2024 &copy;
        </FooterCopyright>
      </FooterContent>
    </StyledFooterSection>
  );
};
