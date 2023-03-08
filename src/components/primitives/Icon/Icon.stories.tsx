import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, IIcon } from "./Icon";
import { mockBaseIcon } from "./Icon.mocks";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Small = Template.bind({});

Small.args = { ...mockBaseIcon.sm } as IIcon;
