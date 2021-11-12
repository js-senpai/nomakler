import Link from "next/link";
import styles from './LinkPrimary.module.sass'
const LinkPrimary = ({url = '/',className = '',...props}):JSX.Element => {
    return (
        <Link {...props}  href={url}>
            <a className={`${styles.linkPrimary} ${className}`}>{props.children}</a>
        </Link>
    )
}
export default LinkPrimary
