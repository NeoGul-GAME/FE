import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@/components/molecules/Avatar";

import me from "@/assets/images/me.webp";

const meta = {
    title: "Molecules/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "The size of the avatar",
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            }
        },
        src: {
            description: "The source of the image",
            control: {
                type: "text"
            }
        },
        alt: {
            description: "The alt text of the image",
            control: {
                type: "text"
            }
        },
        title: {
            description: "The title of the image",
            control: {
                type: "text"
            }
        }
    },
    args: {
        src: me,
        alt: "A placeholder image",
        title: "A placeholder image"
    }
} satisfies Meta<typeof Avatar>;

export default meta;
type story = StoryObj<typeof meta>;

export const Large: story = {
    args: {
        size: "large"
    }
};

export const Medium: story = {
    args: {
        size: "medium"
    }
};

export const Small: story = {
    args: {
        size: "small"
    }
};
