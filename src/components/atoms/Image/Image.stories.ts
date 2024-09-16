import type { Meta, StoryObj } from "@storybook/react";
import Image from "@/components/atoms/Image";

const meta = {
    title: "Atoms/Image",
    component: Image,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: "The title of the image",
            control: {
                type: "text"
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
        }
    },
    args: {
        title: "A placeholder image",
        src: "https://via.placeholder.com/150",
        alt: "A placeholder image"
    }
} satisfies Meta<typeof Image>;

export default meta;
type story = StoryObj<typeof meta>;

export const Default: story = {};
