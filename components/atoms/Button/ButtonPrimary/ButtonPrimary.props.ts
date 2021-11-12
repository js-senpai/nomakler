import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonPrimaryProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > & {
    block?: boolean
}
