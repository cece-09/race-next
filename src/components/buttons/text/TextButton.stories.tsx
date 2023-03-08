import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextButton, ITextButton } from "./TextButton";
import { mockButton } from "./TextButton.mocks";

export default {
  title: "buttons/Text",
  component: TextButton,
  argTypes: {},
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Primary = Template.bind({});
export const Surface = Template.bind({});
export const Transparent = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = { ...mockButton.primary } as ITextButton;
Surface.args = { ...mockButton.surface } as ITextButton;
Transparent.args = { ...mockButton.transparent } as ITextButton;
Disabled.args = { ...mockButton.disabled } as ITextButton;
