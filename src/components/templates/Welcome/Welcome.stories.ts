import type { Meta, StoryObj } from "@storybook/react";
import Welcome from "@/components/templates/Welcome";

const meta: Meta = {
    title: "Templates/Welcome",
    component: Welcome,
    parameters: {
        layout: "fullscreen"
    }
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
