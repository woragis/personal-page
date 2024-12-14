import { useLanguageSwitcherModel } from "./model";

export const LanguageSwitcherView = ({
  t,
  changeLanguage,
}: ReturnType<typeof useLanguageSwitcherModel>) => {
  return (
    <div>
      <p>{t("greeting")}</p>
      <button onClick={() => changeLanguage("en")}>
        {t("changeLanguage")} to English
      </button>
      <button onClick={() => changeLanguage("es")}>
        {t("changeLanguage")} to Espanol
      </button>
    </div>
  );
};
