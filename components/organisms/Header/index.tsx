import dynamic from "next/dynamic";
import {useState} from "react";
import styles from './Header.module.sass'
import {HeaderProps} from "./Header.props";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
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
const Header = ({ header: {menu = [],headerLogo = '/images/atoms/Logo/LogoLight.svg'},...props}:HeaderProps):JSX.Element => {
   const [showMenu,toggleMenu] = useState(false)
   return(
       <header className={styles.header}>
         <DefaultContainer className={styles.header__container}>
             <ButtonBurger active={showMenu} onClick={() => toggleMenu(!showMenu)} />
             <Logo headerLogo={headerLogo} />
             <div className={`${styles.header__wrapper} ${showMenu ? styles.active: ''}`}>
                 <div className="flex justify-end">
                     <button className={styles.header__buttonClose} onClick={() => toggleMenu(!showMenu)}>
                         <FontAwesomeIcon icon={faTimes} />
                     </button>
                 </div>
                 <Menu menu={menu} />
                 <LanguageList />
             </div>
             <ButtonSign />
         </DefaultContainer>
       </header>
   )
}
export default Header
