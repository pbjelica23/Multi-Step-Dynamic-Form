import React from "react";
import { useTranslation } from "react-i18next";

//display info after submit
export const Success = ({ formValues }) => {
  const { t } = useTranslation();
  return (
    <div className="success">
      <p>{t("success")}</p>
      {Object.keys(formValues).map((key) => (
        <div>
          <span>{t(key)}: </span>
          <span>{formValues[key]}</span>
        </div>
      ))}
    </div>
  );
};
