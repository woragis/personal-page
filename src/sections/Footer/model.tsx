import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface SocialMediaInterface {
  title: string;
  href: string;
  icon: ReactElement;
}

export const useFooterModel = () => {
  const footerText = "";

  const { t } = useTranslation();
  const websiteLinks = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("contact"), path: "/contact" },
  ];

  const socialMediaLinks: SocialMediaInterface[] = [
    { title: "Twitter", href: "https://x.com/woragis", icon: <FaTwitter /> },
    {
      title: "Instagram",
      href: "https://instagram.com/y.jezreel.andrade",
      icon: <FaInstagram />,
    },
    { title: "Github", href: "https://github.com/woragis", icon: <FaGithub /> },
    {
      title: "LinkedIn",
      href: "https://lindkedin.com/in/jezreel-andrade",
      icon: <FaLinkedin />,
    },
  ];

  return {
    socialMediaLinks,
    websiteLinks,
    footerText,
  };
};
