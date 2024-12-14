import { useLanguageSwitcherModel } from "./model";

export const LanguageSwitcherView = ({
  t,
  changeLanguage,
  languages,
}: ReturnType<typeof useLanguageSwitcherModel>) => {
  const languagesComponent = languages.map(({ code, label }) => {
    return <button onClick={() => changeLanguage(code)}>{label}</button>;
  });

  return (
    <div>
      <p>{t("greeting")}</p>
      <p>{t("changeLanguage")}</p>
      {languagesComponent}
    </div>
  );
};
