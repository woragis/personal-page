import { useTranslation } from "react-i18next";

export const useLanguageSwitcherModel = () => {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return { t, changeLanguage };
};
