import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Profile, IProfile } from "./Profile";
import { mockProfileProps } from "./Profile.mocks";

export default {
  title: "blocks/Profile",
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockProfileProps.base,
} as IProfile;
