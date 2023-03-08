import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GalleryView, IGalleryView } from "./GalleryView";
import { mockGalleryViewProps } from "./GalleryView.mocks";

export default {
  title: "views/GalleryView",
  component: GalleryView,
  argTypes: {},
} as ComponentMeta<typeof GalleryView>;

const view: ComponentStory<typeof GalleryView> = (args) => (
  <GalleryView {...args} />
);

export const Default = view.bind({});

Default.args = { ...mockGalleryViewProps.gallery } as IGalleryView;
