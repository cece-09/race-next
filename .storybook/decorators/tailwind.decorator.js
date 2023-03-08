import { useEffect } from "react";
import { ThemeProvider } from "../../src/utils/ThemeProvider";

export const DEFAULT_THEME = "light";

export const tailwindTheme = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
