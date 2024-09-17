import styles from "@/components/templates/SkyBackground/SkyBackground.module.css";
import { HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

interface SkyBackgroundProps extends HTMLAttributes<HTMLDivElement> {}

export default function SkyBackground({ children, ...props }: SkyBackgroundProps) {
    return (
        <>
            <div
                className={twJoin(styles.clouds, "h-full w-full fixed -z-10")}
                {...props}
            >
                {["x1", "x2", "x3", "x4", "x5"].map((x) => (
                    <div
                        key={x}
                        className={twJoin(styles.cloud, styles[x])}
                    />
                ))}
            </div>

            {children}
        </>
    );
}
