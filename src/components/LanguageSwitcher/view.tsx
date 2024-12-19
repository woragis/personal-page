import { useLanguageSwitcherModel } from "./model";
import {
  Language,
  LanguageButton,
  LanguagesContainer,
  LanguageSwitcherContainer,
} from "./styles";

export const LanguageSwitcherView = ({
  t,
  changeLanguage,
  languages,
}: ReturnType<typeof useLanguageSwitcherModel>) => {
  const languagesComponent = languages.map(({ code, label }) => {
    return (
      <LanguageButton onClick={() => changeLanguage(code)}>
        {label}
      </LanguageButton>
    );
  });

  return (
    <LanguageSwitcherContainer>
      <Language>{t("changeLanguage")}</Language>
      <LanguagesContainer>{languagesComponent}</LanguagesContainer>
    </LanguageSwitcherContainer>
  );
};
