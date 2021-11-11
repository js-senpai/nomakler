import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {useState} from "react";
import Link from 'next/link'
const ButtonWithList = dynamic(() =>
    import('../Button/ButtonWithList')
)
const LanguageList = ():JSX.Element =>{
    // Toggle language container
    const [showLangList,toggleLangList] = useState(false)
    const { locales = [], locale = 'ru'} = useRouter()
    return (
        <ButtonWithList className="langSwitcher" onClick={() => toggleLangList(!showLangList)} text={locale} showContainer={showLangList} >
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
