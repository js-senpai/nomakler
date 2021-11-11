import {forwardRef, Ref, useEffect, useLayoutEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ButtonWithListProps} from "./ButtonWithList.props";
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from './ButtonWithList.module.sass'
import {useIsomorphicLayoutEffect} from "../../../../hooks";
const ButtonWithList = forwardRef<HTMLButtonElement, ButtonWithListProps>(
    ({ text = '',className = '',children, ...props },ref) => {
        const [showContainer,toggleContainer] = useState(false)
        const [dimensions, setDimensions] = useState({ width:0, height: 0 });
        const targetRef:Ref<any> = useRef()
        useIsomorphicLayoutEffect(() => {
            if (targetRef.current) {
                setDimensions({
                    width: targetRef.current.offsetWidth,
                    height: targetRef.current.offsetHeight
                });
            }
        }, []);
        return (
            <button
                type="button"
                ref={targetRef}
                className={`${styles.buttonWithList} ${showContainer ? styles.active : ''}`}
                onClick={() => toggleContainer(!showContainer)}
            >
                <div className={`${styles.buttonWithList__text}`}>{text}</div>
                <FontAwesomeIcon className={styles.buttonWithList__icon} icon={faSortDown} />
                <div
                    className={`${styles.buttonWithList__container} ${showContainer ? styles.show : ''}`}
                    style={{width: dimensions.width}}
                >
                    {children}
                </div>
            </button>
        )
    })
ButtonWithList.displayName = 'ButtonWithList'
export default ButtonWithList
