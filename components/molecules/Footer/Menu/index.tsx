import dynamic from "next/dynamic";
import {MenuProps} from "./Menu.props";
// Import components
const Link = dynamic(() => import('next/link'))
import styles from './Menu.module.sass'
const Menu = ({menu = [],className = '',...props}:MenuProps):JSX.Element => {
    return (
        <ul {...props} className={`${styles.menu} ${className}`}>
            {
                menu.length ?
                    menu.map(({id,url,text}) => (
                        <li className={`${styles.menu__item}`} key={id}>
                            <Link href={url}>{text}</Link>
                        </li>
                    ))
                : null
            }
        </ul>
    )
}
export default Menu
