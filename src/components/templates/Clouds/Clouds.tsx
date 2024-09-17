import styles from "@/components/templates/Clouds/Clouds.module.css";
import { HTMLAttributes } from "react";

interface CloudsProps extends HTMLAttributes<HTMLDivElement> {}

export default function Clouds(props: CloudsProps) {
    return (
        <div
            className={styles.clouds}
            {...props}
        >
            <div className={`${styles.cloud} ${styles.x1}`} />
            <div className={`${styles.cloud} ${styles.x2}`} />
            <div className={`${styles.cloud} ${styles.x3}`} />
            <div className={`${styles.cloud} ${styles.x4}`} />
            <div className={`${styles.cloud} ${styles.x5}`} />
        </div>
    );
}
