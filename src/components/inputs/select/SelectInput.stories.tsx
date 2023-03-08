import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectInput, ISelectInput } from "./SelectInput";
import { mockSelect } from "./SelectInput.mocks";

export default {
  title: "inputs/Select",
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);

export const Base = Template.bind({});
export const Open = Template.bind({});

Base.args = { ...mockSelect.base } as ISelectInput;
Open.args = { ...mockSelect.open } as ISelectInput;
