import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, InputLabel, FormControl, MenuItem } from "@material-ui/core";

import { validateField } from "../../helpers";

export default function SelectField({
  name,
  valueList,
  value,
  label,
  onChange,
  error,
}) {
  const { t } = useTranslation();
  const [errorOnBlur, setErrorOnBlur] = useState("");

  useEffect(() => setErrorOnBlur(""), [value]);
  return (
    <>
      <FormControl fullWidth style={{ marginTop: 20 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          defaultValue=""
          onChange={onChange}
          name={name}
          value={value}
          onClose={(e) =>
            validateField(e.target.value, null, null, setErrorOnBlur)
          }
        >
          {valueList.map((element) => {
            return (
              <MenuItem key={element.name} value={element.value}>
                {t(element.name)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {error && <p className="red">{t(error)}</p>}
      {errorOnBlur !== error && <p className="red">{t(errorOnBlur)}</p>}
    </>
  );
}
