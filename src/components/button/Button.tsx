import {ReactNode} from "react";

type ButtonProps = {
    className?: string
    children?: ReactNode
}
export const Button = ({children, className}:ButtonProps) => {
    return <button className={className}>
        {children}
    </button>
}