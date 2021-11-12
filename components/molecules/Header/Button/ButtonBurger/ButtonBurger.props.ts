import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonBurgerProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > & {
    active: boolean
}
