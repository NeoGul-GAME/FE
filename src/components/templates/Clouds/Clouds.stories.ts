import type { Meta, StoryObj } from "@storybook/react";
import Clouds from "@/components/templates/Clouds";

const meta: Meta = {
    title: "Templates/Clouds",
    component: Clouds,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
