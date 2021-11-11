import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonWithListProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > & {
    text: string
}
