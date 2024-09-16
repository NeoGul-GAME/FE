import { HTMLAttributes } from "react";

function Wrapper(props: HTMLAttributes<HTMLDivElement>) {
    return <div {...props} />;
}

export default Wrapper;
