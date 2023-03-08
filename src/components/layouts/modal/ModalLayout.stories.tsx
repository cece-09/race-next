import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalLayout, IModalLayout } from "./ModalLayout";
import { mockModalLayoutProps } from "./ModalLayout.mocks";

export default {
  title: "layouts/Modal",
  component: ModalLayout,
  argTypes: {},
} as ComponentMeta<typeof ModalLayout>;

const Template: ComponentStory<typeof ModalLayout> = (args) => (
  <ModalLayout {...args} />
);

export const Default = Template.bind({});

Default.args = { ...mockModalLayoutProps.base } as IModalLayout;
