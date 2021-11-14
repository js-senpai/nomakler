import {forwardRef,  useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ButtonWithListProps} from "./ButtonWithList.props";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from './ButtonWithList.module.sass'
const ButtonWithList = forwardRef<HTMLButtonElement, ButtonWithListProps>(
    ({ text = '',className = '',children, ...props },ref) => {
        const [showContainer,toggleContainer] = useState(false)
        return (
            <button
                type="button"
                ref={ref}
                className={`${styles.buttonWithList} ${showContainer ? styles.active : ''} ${className}`}
                onClick={() => toggleContainer(!showContainer)}
            >
                <div className={`${styles.buttonWithList__text}`}>{text}</div>
                <FontAwesomeIcon className={styles.buttonWithList__icon} icon={faSortDown} />
                <div
                    className={`${styles.buttonWithList__container} ${showContainer ? styles.show : ''}`}
                >
                    {children}
                </div>
            </button>
        )
    })
ButtonWithList.displayName = 'ButtonWithList'
export default ButtonWithList
