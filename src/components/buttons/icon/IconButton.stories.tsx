import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton, { IIconButton } from "./IconButton";
import { mockIconButtonProps } from "./IconButton.mocks";

export default {
  title: "buttons/Icon",
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
export const Surface = Template.bind({});
export const Transparent = Template.bind({});

Primary.args = { ...mockIconButtonProps.primary } as IIconButton;
Surface.args = { ...mockIconButtonProps.surface } as IIconButton;
Transparent.args = { ...mockIconButtonProps.transparent } as IIconButton;
