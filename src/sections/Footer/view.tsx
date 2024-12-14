import { Link } from "react-router-dom";
import { useFooterModel } from "./model";

export const FooterView = ({
  footerText,
  websiteLinks,
  socialMediaLinks,
}: ReturnType<typeof useFooterModel>) => {
  const websiteLinksComponent = websiteLinks.map(({ title, path }) => {
    return <Link to={path}>{title}</Link>;
  });
  const socialMediaLinksComponent = socialMediaLinks.map(
    ({ title, href, icon }) => {
      return (
        <div>
          <Link to={href}>
            {icon} {title}
          </Link>
        </div>
      );
    }
  );

  return (
    <div>
      <div>{footerText}</div>
      <div>{websiteLinksComponent}</div>
      <div>{socialMediaLinksComponent}</div>
    </div>
  );
};
