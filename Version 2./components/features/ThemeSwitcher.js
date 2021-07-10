import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextImage from "next/image";

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
            <NextImage
              src="/emoji/emoji-sun.png"
              className="aspect-w-1 aspect-h-1"
              layout="fill"
            />
          ) : (
            <NextImage
              src="/emoji/emoji-moon.png"
              className="aspect-w-1 aspect-h-1"
              layout="fill"
            />
          )}
        </div>
      )}
    </button>
  );
}
