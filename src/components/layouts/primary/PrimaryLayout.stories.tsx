import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrimaryLayout, IPrimaryLayout } from "./PrimaryLayout";
import { mockPrimaryLayout } from "./PrimaryLayout.mocks";
import { ThemeType } from "../../../utils/ThemeProvider";

export default {
  title: "layouts/Primary",
  component: PrimaryLayout,
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const LoggedIn = Template.bind({});
export const LoggedOut = Template.bind({});

LoggedIn.args = { ...mockPrimaryLayout.loggedIn } as IPrimaryLayout;
LoggedOut.args = { ...mockPrimaryLayout.loggedOut } as IPrimaryLayout;
LoggedIn.parameters = { theme: ThemeType.light };
