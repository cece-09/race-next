import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, IButton } from "./Button";
import { mockButton } from "./Button.mocks";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
export const Chip = Template.bind({});
export const Full = Template.bind({});

Base.args = {
  ...mockButton.base,
} as IButton;

Chip.args = {
  ...mockButton.chip,
} as IButton;

Full.args = {
  ...mockButton.full,
} as IButton;
