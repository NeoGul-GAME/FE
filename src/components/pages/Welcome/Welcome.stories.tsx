import type { Meta, StoryObj } from "@storybook/react";
import Welcome from "@/components/pages/Welcome";
import SkyBackground from "@/components/templates/SkyBackground";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const meta = {
    title: "Pages/Welcome",
    component: Welcome,
    parameters: {
        layout: "fullscreen"
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Routes>
                    <Route element={<SkyBackground />}>
                        <Route
                            path="/"
                            element={<Story />}
                        />
                    </Route>
                </Routes>
            </MemoryRouter>
        )
    ]
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
