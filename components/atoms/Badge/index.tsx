import styles from './Badge.module.sass'
import {BadgeProps} from "./BadgeProps";
const Badge = ({text = '',className = '',...props}:BadgeProps):JSX.Element => {
    return (
        <div {...props} className={`${styles.badge} ${className}`}>{text.length ? text: ''}</div>
    )
}
export default Badge
