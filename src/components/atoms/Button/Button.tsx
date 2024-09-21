import cn from "@/utils/class";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    [
        "rounded-md whitespace-nowrap w-fit",
        "focus-visible:outline-none focus-visible:ring-2 ring-[--colour-dark-brown]",
        "active:scale-90 [transition-property:_transform,_scale]",
    ],
    {
        variants: {
            variant: {
                default: "",
                "selection": [
                    "rounded-3xl shadow-lg hover:animate-move-up",
                    "hover:-translate-y-1 duration-200"
                ]
            },
            size: {
                medium: "px-4 py-2",
                "2xl": "px-6 py-3 text-base"
            },
            colour: {
                default: "",
                primary: "bg-[--colour-brown] border-2 border-[--colour-dark-brown] text-white",
                secondary: "bg-[--colour-light-brown] border-2 border-[--colour-dark-brown] text-white"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "medium",
            colour: "default"
        }
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    label?: string; // Button text
    title: string; // Aria label
}

export default function Button(props: ButtonProps) {
    const { variant, size, children, className, label, title, colour } = props;

    return (
        <button
            className={cn(buttonVariants({ variant, size, className, colour }), " ")}
            title={title}
        >
            {label ? label : children}
        </button>
    );
}
