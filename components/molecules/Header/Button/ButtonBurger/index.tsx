import {forwardRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import {ButtonBurgerProps} from "./ButtonBurger.props";
import styles from './ButtonBurger.module.sass'
const ButtonBurger = forwardRef<HTMLButtonElement, ButtonBurgerProps>(
    ({ active = false,className = '',children, ...props }, ref) => {
        return (
            <button
                {...props}
                type="button"
                ref={ref}
                className={`${styles.buttonBurger}`}
            >
                {
                    active ? <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />
                }
            </button>
        )
    })
ButtonBurger.displayName = 'ButtonBurger'
export default ButtonBurger
