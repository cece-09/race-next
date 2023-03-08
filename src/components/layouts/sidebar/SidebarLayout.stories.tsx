import { ComponentStory, ComponentMeta } from "@storybook/react";
import SidebarLayout, { ISidebarLayout } from "./SidebarLayout";
import { mockSidebarLayoutProps } from "./SidebarLayout.mocks";

export default {
  title: "layouts/Sidebar",
  component: SidebarLayout,
  argTypes: {},
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
);

export const LoggedIn = Template.bind({});
export const LoggedOut = Template.bind({});

LoggedIn.args = { ...mockSidebarLayoutProps.loggedIn } as ISidebarLayout;
LoggedOut.args = { ...mockSidebarLayoutProps.loggedOut } as ISidebarLayout;
