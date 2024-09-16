import type { Meta, StoryObj } from "@storybook/react";
import Clouds from "@/components/organisms/Clouds";

const meta: Meta = {
    title: "Organisms/Clouds",
    component: Clouds,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
