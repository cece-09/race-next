import { Dispatch, SetStateAction, createContext, useState } from "react";

export enum ThemeType {
  "light",
  "dark",
}

interface IThemeContext {
  theme?: ThemeType;
  setTheme?: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<IThemeContext>({});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(ThemeType.light);
  const defaultContext: IThemeContext = { theme, setTheme };
  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};
