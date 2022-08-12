import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Toggle } from "./styledComponents";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const { id, setTheme } = useContext(ThemeContext); //context for themes
  return (
    <div className="header">
      <LanguageSwitcher />
      <Toggle isActive={id === "dark"} onToggle={setTheme} />
    </div>
  );
}
