import type { Meta, StoryObj } from "@storybook/react";

import PostTagList from "../../components/elements/PostTagList";

const meta: Meta<typeof PostTagList> = {
  component: PostTagList,
};
export default meta;

type Story = StoryObj<typeof PostTagList>;

export const Story: Story = {
  args: {
    tags: ["タグ1", "tag2", "タグ3", "タグ4"],
  },
};
