import { Portal } from "fenextjs";
import { ReactNode, useEffect } from "preact/compat";

export interface HeadProps {
    children?: ReactNode;
}

export const Head = ({ children }: HeadProps) => {
    useEffect(() => {
        if (document.querySelector("#head-top") == undefined) {
            const head = document.createElement("head");
            head.id = "head-top";
            document
                .querySelector("html")
                ?.insertBefore(head, document.querySelector("head"));
        }
    }, []);
    return (
        <Portal container={document.querySelector("#head-top") as any}>
            {children}
            <title>{"Planium"}</title>
            <link rel="icon" href="/favicon.png" sizes="32x32"></link>
        </Portal>
    );
};
