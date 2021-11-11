import {forwardRef} from "react";
import {ButtonWithIconProps} from "./ButtonWithIcon.props";
import styles from './ButtonWithIcon.module.sass'
const ButtonWithIcon = forwardRef<HTMLButtonElement, ButtonWithIconProps>(
    ({text = '', className = '',children, ...props }, ref) => {
        return (
            <button
                type="button"
                ref={ref}
                className={`${styles.buttonWithIcon} ${className}`}
            >
                <div className="buttonWithIcon__icon">{children}</div>
                <div className={`${styles.buttonWithIcon__text}`}>{text}</div>
            </button>
        )
    })
ButtonWithIcon.displayName = 'ButtonWithIcon'
export default ButtonWithIcon
