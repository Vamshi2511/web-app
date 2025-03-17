"use client";
import { useTheme } from "../lib/ThemeContext"; // ✅ Ensure the correct import path

const ThemeToggle = () => {
  console.log("✅ ThemeToggle component loaded");
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 15px",
        margin: "10px",
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
