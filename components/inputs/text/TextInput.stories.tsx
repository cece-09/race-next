import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput, ITextInput } from "./TextInput";
import { mockInput } from "./TextInput.mocks";

export default {
  title: "inputs/Text",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Text = Template.bind({});
export const Number = Template.bind({});
export const Invalid = Template.bind({});

Text.args = { ...mockInput.text } as ITextInput;
Number.args = { ...mockInput.number } as ITextInput;
Invalid.args = { ...mockInput.invalid } as ITextInput;
