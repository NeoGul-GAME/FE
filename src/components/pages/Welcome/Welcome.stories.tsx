import type { Meta, StoryObj } from "@storybook/react";
import Welcome from "@/components/pages/Welcome";
import SkyBackground from "@/components/templates/SkyBackground";

const meta = {
    title: "Pages/Welcome",
    component: Welcome,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <SkyBackground>
            <Welcome />
        </SkyBackground>
    )
};
