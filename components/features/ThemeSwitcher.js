import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-gray-200 focus:outline-none dark:bg-gray-800 h-9 w-9 transform transition-all ease-in-out active:scale-75"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <div>
          {theme === "dark" ? (
            <img src="/emoji/emoji-sun.png" className="aspect-w-1 aspect-h-1" />
          ) : (
            <img
              src="/emoji/emoji-moon.png"
              className="aspect-w-1 aspect-h-1"
            />
          )}
        </div>
      )}
    </button>
  );
}
