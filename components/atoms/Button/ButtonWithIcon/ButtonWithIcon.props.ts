import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonWithIconProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > & {
    text : string
}
