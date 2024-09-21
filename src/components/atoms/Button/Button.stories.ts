import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/atoms/Button";

const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    args: {
        label: "Button",
        title: "Button"
    },
    argTypes: {
        children: {
            control: {
                type: "text"
            }
        }
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SelectionPrimary: Story = {
    args: {
        variant: "selection",
        size: "2xl",
        colour: "primary",
        label: "로그인 하기",
        title: "로그인 버튼"
    }
};
