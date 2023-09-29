import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/Header";

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Story: Story = {
  args: {
    siteName: "Life in the Fast Lane",
  },
};
