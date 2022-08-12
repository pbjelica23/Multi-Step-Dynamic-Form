import React from "react";
import { useTranslation } from "react-i18next";

import Input from "./FormFields/Input";
import DateField from "./FormFields/DateField";
import SelectField from "./FormFields/SelectField";

export const FormElement = ({
  field,
  formValues,
  handleChange,
  formErrors,
}) => {
  const { t } = useTranslation();

  //generate field based on props
  const generateFieldType = (field) => {
    switch (field.fieldType) {
      case "string":
      case "password":
        return (
          <Input
            name={field.code}
            label={t(field.code)}
            value={formValues[field.code]}
            onChange={(e) => handleChange(e, field)}
            error={formErrors}
            validators={field.validators}
          />
        );
      case "dropdown":
        return (
          <SelectField
            name={field.code}
            value={formValues[field.code]}
            valueList={field.valueList}
            label={t(field.code)}
            onChange={(e) => handleChange(e, field)}
            error={formErrors}
          />
        );
      case "date":
        return (
          <DateField
            name={field.code}
            value={formValues[field.code]}
            label={t(field.code)}
            onChange={(e) => handleChange(e, field)}
            error={formErrors}
          />
        );
      default:
        <Input
          name={field.code}
          value={formValues[field.code]}
          label={t(field.code)}
          onChange={(e) => handleChange(e, field)}
          error={formErrors}
        />;
    }
  };

  return <div>{generateFieldType(field)}</div>;
};
