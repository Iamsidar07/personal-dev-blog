"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
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
    <button onClick={toggleTheme} className="grid place-content-center ml-2">
      {theme === "dark" ? (
        <BsMoon className={`w-5 h-5 animate-theme `} />
      ) : (
        <BsSun className="w-6 h-6 animate-theme " />
      )}
    </button>
  );
};

export default ToggleButton;
