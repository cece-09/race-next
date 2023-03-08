import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListView, IListView } from "./ListView";
import { mockListViewProps } from "./ListView.mocks";

export default {
  title: "views/ListView",
  component: ListView,
  argTypes: {},
} as ComponentMeta<typeof ListView>;

const View: ComponentStory<typeof ListView> = (args) => <ListView {...args} />;

export const List = View.bind({});

List.args = { ...mockListViewProps.list } as IListView;
