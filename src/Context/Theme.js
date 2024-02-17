import { createContext, useContext } from "react";
export const ThemeContext = createContext({
  themeMode: "Light",
  darkTheme: function () {},
  lightTheme: function () {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
