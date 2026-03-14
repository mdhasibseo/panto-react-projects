
import React, { useEffect, useState } from 'react'

const ThemeToggle = ({ className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    }, [isDarkMode]);
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`btn btn-outline gap-2 ${className}`}
    >
      {isDarkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}

export default ThemeToggle