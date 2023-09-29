import type { Meta, StoryObj } from "@storybook/react";

import PostTags from "../../components/elements/PostTags";

const meta: Meta<typeof PostTags> = {
  component: PostTags,
};
export default meta;

type Story = StoryObj<typeof PostTags>;

export const Story: Story = {
  args: {
    tags: ["タグ1", "tag2", "タグ3", "タグ4"],
  },
};
