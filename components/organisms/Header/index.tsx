import dynamic from "next/dynamic";
import {useState} from "react";
import styles from './Header.module.sass'
import {HeaderProps} from "./Header.props";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// Import components
const DefaultContainer = dynamic(() =>
    import('../../containers/DefaultContainer')
)
const Logo = dynamic(() =>
    import('../../atoms/Logo')
)
const ButtonBurger = dynamic(() =>
    import('../../molecules/Header/Button/ButtonBurger')
)
const Menu = dynamic(() =>
    import('../../molecules/Header/Menu')
)
const LanguageList = dynamic(() =>
    import('../../molecules/Header/LanguageList')
)
const ButtonSign = dynamic(() =>
    import('../../molecules/Header/Button/ButtonSign')
)
const Header = ({ header: {menu = [],src = '/images/atoms/Logo/LogoLight.svg'},...props}:HeaderProps):JSX.Element => {
   const [showMenu,toggleMenu] = useState(false)
   return(
       <header className={styles.header}>
         <DefaultContainer className={styles.header__container}>
             <ButtonBurger active={showMenu} onClick={() => toggleMenu(!showMenu)} />
             <div className={`${styles.header__logo}`}>
                 <Logo src={src} priority={true} />
             </div>
             <div className={`${styles.header__wrapper} ${showMenu ? styles.active: ''}`}>
                 {/*<div className="flex justify-end">*/}
                 {/*    <button className={styles.header__btnClose} onClick={() => toggleMenu(!showMenu)}>*/}
                 {/*        <FontAwesomeIcon icon={faTimes} />*/}
                 {/*    </button>*/}
                 {/*</div>*/}
                 {menu.length ?<Menu menu={menu} />: null}
             </div>
             <LanguageList />
             <ButtonSign className={`${styles.header__btnAuth}`} />
         </DefaultContainer>
       </header>
   )
}
export default Header
