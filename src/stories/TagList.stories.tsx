import type { Meta, StoryObj } from "@storybook/react";

import TagList from "../components/TagList";

const meta: Meta<typeof TagList> = {
  component: TagList,
};
export default meta;

type Story = StoryObj<typeof TagList>;

export const Story: Story = {
  args: {
    tags: ["tag1", "tag2"],
  },
};
