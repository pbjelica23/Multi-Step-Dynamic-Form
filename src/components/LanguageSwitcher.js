import React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "./styledComponents/Button";

//list of languages
const lngs = {
  en: { nativeName: "English" },
  me: { nativeName: "Montenegrin" },
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="languageSwitcher">
      {Object.keys(lngs).map((lng) => (
        <Button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </div>
  );
};
