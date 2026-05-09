import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-colors duration-200 hover:text-neutral-950 dark:border-black dark:bg-neutral-950 dark:text-white"
    >
      {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}

export default ThemeToggle;
