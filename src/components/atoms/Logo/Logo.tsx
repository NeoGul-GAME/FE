import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LogoProps extends HTMLAttributes<HTMLParagraphElement> {}

export default function Logo({ className }: LogoProps) {
    return (
        <p
            className={twMerge(
                "text-[3.5rem] sm:text-[4rem] font-['Permanent_Marker'] text-[--colour-brown] font-medium",
                className
            )}
        >
            neogul.io
        </p>
    );
}
