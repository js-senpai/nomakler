import styles from './Badge.module.sass'
import {BadgeProps} from "./BadgeProps";
const Badge = ({children,className = '',...props}:BadgeProps):JSX.Element => {
    return (
        <div {...props} className={`${styles.badge} ${className}`}>{children}</div>
    )
}
export default Badge
