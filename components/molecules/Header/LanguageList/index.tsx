import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import styles from './LanguageList.module.sass'
const Link = dynamic(()=>import('next/link'))
const ButtonWithList = dynamic(() =>
    import('../Button/ButtonWithList')
)
import {LanguageSwitcher, useLanguageQuery} from 'next-export-i18n';
const LanguageList = ():JSX.Element =>{
    // Toggle language container
    const locales = ['ru','en']
    return (
        <ButtonWithList className={styles.languageList} text="ru" >
            {
                locales.length ? locales.map((lang,index) => (
                    <div key={index} className="langSwitcher__item">
                        <LanguageSwitcher
                            lang={lang}
                        >
                            {lang}
                        </LanguageSwitcher>
                    </div>
                )): null
            }
        </ButtonWithList>
    )
}

export default LanguageList
