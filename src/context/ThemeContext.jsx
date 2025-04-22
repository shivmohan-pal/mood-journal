// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const themes = ['light', 'dark', 'ocean', 'forest', 'sunset'];
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    const next = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[next]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
