import type { Meta, StoryObj } from "@storybook/react";

import CodeBlock from "../components/elements/CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
};
export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Story: Story = {
  args: {
    className: "typescript",
    fileName: "test.ts",
    children: "hoge",
  },
};
