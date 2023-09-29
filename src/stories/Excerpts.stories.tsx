import type { Meta, StoryObj } from "@storybook/react";

import Excerpts from "../components/elements/Excerpts";
import { format } from "date-fns";
import { newJpDate } from "../utils/date";

const meta: Meta<typeof Excerpts> = {
  component: Excerpts,
};
export default meta;

type Story = StoryObj<typeof Excerpts>;

export const Story: Story = {
  args: {
    title: "記事タイトル",
    date: format(newJpDate(), "yyyy/MM/dd"),
    tags: ["tag1", "tag2"],
    excerpt: "hogehogehogehogehoghopehg:poajr;giaernb;ioarniaoednbiaer:paeri:bp",
  },
};
