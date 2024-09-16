import { ImgHTMLAttributes } from "react";

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <img {...props} />;
}

export default Image;
