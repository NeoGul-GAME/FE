import type { Meta, StoryObj } from "@storybook/react";
import SkyBackground from "@/components/templates/SkyBackground";

const meta = {
    title: "Templates/SkyBackground",
    component: SkyBackground,
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof SkyBackground>;

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
