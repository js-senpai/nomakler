import dynamic from "next/dynamic";

const Image = dynamic(()=>import('next/image'))
import styles from './Copyright.module.sass'
import { useTranslation } from 'next-export-i18n'
import customLoader from "../../../../loaders/customLoader";
const Copyright = ({className = '',...props}):JSX.Element => {
    const { t } = useTranslation()
    return (
        <a href="https://michaelstudioo.com/" target="__blank" className={`${styles.copyright}`}>
            <span>{t('OTHER.COPYRIGHT')}</span>
            <div  className={styles.copyright__img}>
                <Image 
                    width={31}
                    height={22}
                    src="/images/molecules/Footer/Copyright/logo.png"
                    alt="Michael studio"
                    quality="60"
                    layout="fixed"
                />
            </div>
            <span>Michaelstudioo</span>
        </a>
    )
}
export default Copyright
