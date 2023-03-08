import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IndexPage, IIndexPage } from "..";
import { mockIndexPageProps } from "./IndexPage.mocks";

export default {
  title: "pages/IndexPage",
  component: IndexPage,
  argTypes: {},
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockIndexPageProps.base,
} as IIndexPage;
