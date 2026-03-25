import { useTheme } from "styled-components";
import { Moon, Sun } from "react-feather";
import { useApp } from "../../../context/AppContext";

function Theme() {
  const { darkMode, toggleDarkMode } = useApp();
  const theme = useTheme();

  return darkMode ? (
    <Sun
      size={16}
      color={theme.primary}
      onClick={toggleDarkMode}
      style={{ cursor: "pointer" }}
    />
  ) : (
    <Moon
      size={16}
      color={theme.primary}
      onClick={toggleDarkMode}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Theme;
