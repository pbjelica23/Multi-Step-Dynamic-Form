import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputLabel, TextField } from "@material-ui/core";

import { validateField } from "../../helpers";

export default function DateField({ name, value, label, onChange, error }) {
  const { t } = useTranslation();

  const [errorOnBlur, setErrorOnBlur] = useState("");

  return (
    <>
      <div style={{ marginTop: 30 }}>
        <InputLabel style={{ marginTop: 20, marginBottom: 10 }}>
          {label}
        </InputLabel>
        <TextField
          fullWidth
          type="date"
          value={value}
          onChange={onChange}
          name={name}
          onBlur={(e) =>
            validateField(e.target.value, null, null, setErrorOnBlur)
          }
        />
      </div>
      {error && <p className="red">{t(error)}</p>}
      {errorOnBlur && !error && <p className="red">{t(errorOnBlur)}</p>}
    </>
  );
}
