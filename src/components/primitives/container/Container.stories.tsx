import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IContainer, Container } from "./Container";
import { mockContainer } from "./Container.mocks";

export default {
  title: "Container",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Overlay = Template.bind({});

Overlay.args = { ...mockContainer.overlay } as IContainer;
