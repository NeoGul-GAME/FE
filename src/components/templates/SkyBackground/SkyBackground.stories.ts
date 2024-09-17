import type { Meta, StoryObj } from "@storybook/react";
import Clouds from "@/components/templates/SkyBackground";

const meta: Meta = {
    title: "Templates/SkyBackground",
    component: Clouds,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
