import type { Meta, StoryObj } from "@storybook/react";
import Logo from "@/components/atoms/Logo";

const meta = {
    title: "Atoms/Logo",
    component: Logo,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
