import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import styles from './LanguageList.module.sass'
const Link = dynamic(()=>import('next/link'))
const ButtonWithList = dynamic(() =>
    import('../Button/ButtonWithList')
)
const LanguageList = ():JSX.Element =>{
    // Toggle language container
    const { locales = [], locale = 'ru'} = useRouter()
    return (
        <ButtonWithList className={styles.languageList} text={locale} >
            {
                locales.length ? locales.map((lang,index) => (
                    <li key={index} className="langSwitcher__item">
                        <Link
                            href='/'
                            locale={lang}
                        >
                            {lang}
                        </Link>
                    </li>
                )): null
            }
        </ButtonWithList>
    )
}

export default LanguageList
