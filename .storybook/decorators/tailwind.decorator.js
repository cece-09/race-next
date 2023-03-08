import { useEffect } from "react";
import { ThemeProvider } from "../../utils/ThemeProvider";

export const DEFAULT_THEME = "light";

export const tailwindTheme = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    const htmlTag = document.documentElement;

    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute("data-mode", theme || DEFAULT_THEME);
  }, [theme]);

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
