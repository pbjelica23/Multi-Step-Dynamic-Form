import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { validateField } from "../../helpers";

export default function Input({ name, label, value, onChange, error }) {
  const { t } = useTranslation();

  const [errorOnBlur, setErrorOnBlur] = useState("");

  useEffect(() => setErrorOnBlur(""), [value]);

  return (
    <>
      <TextField
        fullWidth
        style={{ marginTop: 20 }}
        name={name}
        label={label}
        value={value}
        type={name.includes("password") ? "password" : ""}
        onChange={onChange}
        color={error ? "secondary" : "primary"}
        onBlur={(e) =>
          validateField(e.target.value, null, null, setErrorOnBlur)
        }
      />
      {error && <p className="red">{t(error)}</p>}
      {errorOnBlur !== error && <p className="red">{t(errorOnBlur)}</p>}
    </>
  );
}
