import { Moon, Sun } from "react-feather";
import { useApp } from "../../../context/AppContext";

function Theme() {
  const { darkMode, toggleDarkMode } = useApp();

  return darkMode ? (
    <Sun
      size={16}
      className="text-white cursor-pointer"
      onClick={toggleDarkMode}
    />
  ) : (
    <Moon
      size={16}
      className="text-neutral-700 cursor-pointer"
      onClick={toggleDarkMode}
    />
  );
}

export default Theme;
