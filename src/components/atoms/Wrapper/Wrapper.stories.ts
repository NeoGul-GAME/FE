import type { Meta, StoryObj } from "@storybook/react";
import Wrapper from "@/components/atoms/Wrapper";

const meta = {
    title: "Atoms/Wrapper",
    component: Wrapper,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type story = StoryObj<typeof meta>;

export const Default: story = {};
