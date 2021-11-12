// Import components
import dynamic from "next/dynamic";
import {FooterProps} from "./Footer.props";
// Import components
const DefaultContainer = dynamic(() =>
    import('../../containers/DefaultContainer')
)
const Logo = dynamic(() =>
    import('../../atoms/Logo')
)
const Socials = dynamic(() =>
    import('../../molecules/Footer/Socials')
)
const Menu = dynamic(() =>
    import('../../molecules/Footer/Menu')
)
const Copyright = dynamic(() =>
    import('../../molecules/Footer/Copyright')
)
import styles from './Footer.module.sass'
const Footer = ({footer:{
    logo = '/images/atoms/Logo/LogoDark.svg',
    socials = [],
    menu = [],
    infoMenu = [],
},...props}:FooterProps):JSX.Element => {
    return (
        <footer {...props} className={`${styles.footer}`}>
            <DefaultContainer className={`${styles.footer__container}`}>
                <div className={`${styles.footer__item}`}>
                    <div className={`${styles.footer__logo}`}>
                        <Logo src={logo} />
                    </div>
                    <div className={`${styles.footer__socials}`}>
                        {
                            socials.length ? <Socials  socials={socials} />: null
                        }
                    </div>
                </div>
                <div className={`${styles.footer__item}`}>
                    {
                        menu.length ? <Menu menu={menu} />: null
                    }
                </div>
                <div className={`${styles.footer__item} ${styles.footer__itemLast}`}>
                    {
                        infoMenu.length ? <Menu menu={infoMenu} />: null
                    }
                    <div className={`${styles.footer__copyright}`}>
                        <Copyright />
                    </div>
                </div>
            </DefaultContainer>
        </footer>
    )
}
export default Footer
