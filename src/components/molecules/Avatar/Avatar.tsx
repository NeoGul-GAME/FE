import Image from "@/components/atoms/Image";
import { ImgHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

export interface AvatarProps extends ImgHTMLAttributes<HTMLDivElement> {
    size: "small" | "medium" | "large";
}

export default function Avatar({ src, size, alt, ...props }: AvatarProps) {
    const sizeClass = getAvatarSize(size);

    return (
        <div
            className={twJoin("rounded-full overflow-clip", sizeClass)}
            {...props}
        >
            <Image
                className={twJoin(
                    "[transition-property: scale] hover:scale-125 duration-500",
                    sizeClass
                )}
                src={src}
                alt={alt}
            />
        </div>
    );
}

function getAvatarSize(size: AvatarProps["size"]): string {
    switch (size) {
        case "small":
            return "h-12 w-12";
        case "medium":
            return "h-16 w-16";
        case "large":
        default:
            return "h-20 w-20";
    }
}
