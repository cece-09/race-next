import "../styles/global.css";
import * as NextImage from "next/image";
import { tailwindTheme } from "./decorators/tailwind.decorator";
import { loginDecorator } from "./decorators/login.decorator";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    toolbar: {
      icon: "lightning",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
  login: {
    name: "LogIn",
    description: "Global User Data",
    toolbar: {
      icon: "user",
      items: [
        { value: "login", title: "LogIn" },
        { value: "logout", title: "LogOut" },
      ],
    },
  },
};

export const decorators = [tailwindTheme, loginDecorator];
