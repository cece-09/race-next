import { UserProvider } from "../../utils/UserProvider";

export const DEFAULT_THEME = "light";

export const loginDecorator = (Story, context) => {
  return (
    <UserProvider>
      <Story />
    </UserProvider>
  );
};
