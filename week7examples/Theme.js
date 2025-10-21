import { createContext, useContext } from "react";

const theme = {
    colors: {
        primary: "#31fb1f",
        secondary: "#ff0000"
    }
}

const ThemeContext = createContext(theme)

export function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}