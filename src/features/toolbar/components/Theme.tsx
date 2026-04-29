import { FiMoon as Moon, FiSun as Sun } from "react-icons/fi";
import { useTheme } from "next-themes";

function Theme() {
  const { resolvedTheme, setTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  return darkMode ? (
    <Sun
      size={16}
      className="text-white cursor-pointer"
      onClick={() => setTheme("light")}
    />
  ) : (
    <Moon
      size={16}
      className="text-neutral-700 cursor-pointer"
      onClick={() => setTheme("dark")}
    />
  );
}

export default Theme;
