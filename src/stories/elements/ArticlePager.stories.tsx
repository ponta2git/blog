import type { Meta, StoryObj } from "@storybook/react";

import ArticlePager from "../../components/elements/ArticlePager";

const meta: Meta<typeof ArticlePager> = {
  component: ArticlePager,
};
export default meta;

type Story = StoryObj<typeof ArticlePager>;

export const Story: Story = {
  args: {
    previous: {
      title: "",
      name: "hoge",
    },
    next: {
      title: "",
      name: "hoge",
    },
  },
};
