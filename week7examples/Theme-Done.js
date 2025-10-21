import { createContext, useContext } from 'react';

const theme = {
  colors: {
    primary: '#3b48ff',
    secondary: '#00eaff',
    background: '#ffffff',
    text: '#000000',
    danger: '#ff0000',
  },
  spacing: {
    small: 10,
    medium: 20,
    large: 30,
  },
};

const ThemeContext = createContext(theme);

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}