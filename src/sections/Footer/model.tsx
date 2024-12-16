import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface SocialMediaInterface {
  title: string;
  path: string;
  icon: ReactElement;
}

export const useFooterModel = () => {
  const footerText = "How";

  const { t } = useTranslation();
  const websiteLinks = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("contact"), path: "/contact" },
  ];

  const socialMediaLinks: SocialMediaInterface[] = [
    { title: "Twitter", path: "https://x.com/woragis", icon: <FaTwitter /> },
    {
      title: "Instagram",
      path: "https://instagram.com/y.jezreel.andrade",
      icon: <FaInstagram />,
    },
    { title: "Github", path: "https://github.com/woragis", icon: <FaGithub /> },
    {
      title: "LinkedIn",
      path: "https://lindkedin.com/in/jezreel-andrade",
      icon: <FaLinkedin />,
    },
  ];

  return {
    socialMediaLinks,
    websiteLinks,
    footerText,
  };
};
