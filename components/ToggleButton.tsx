"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsMoonStars, BsSun, BsSunrise } from "react-icons/bs";
const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={toggleTheme} className="grid place-content-center">
      {theme === "dark" ? (
        <BsMoon className={`w-4 h-4 animate-theme `} />
      ) : (
        <BsSun className="w-4 h-4 animate-theme " />
      )}
    </button>
  );
};

export default ToggleButton;
