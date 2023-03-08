import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GraphView, IGraphView } from "./GraphView";
import { mockGraphViewProps } from "./GraphView.mocks";

export default {
  title: "views/GraphView",
  component: GraphView,
  argTypes: {},
} as ComponentMeta<typeof GraphView>;

const View: ComponentStory<typeof GraphView> = (args) => (
  <GraphView {...args} />
);

export const Graph = View.bind({});

Graph.args = { ...mockGraphViewProps.graph } as IGraphView;
