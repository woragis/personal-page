import { useTranslation } from "react-i18next";

export const useNavbarModel = () => {
  interface NavLinksInterface {
    title: string;
    path: string;
  }
  const { t } = useTranslation();

  const navLinks: NavLinksInterface[] = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("contact"), path: "/contact" },
  ];

  return { navLinks };
};
