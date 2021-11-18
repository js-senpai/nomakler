import dynamic from "next/dynamic";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Copyright.module.sass'
import { useTranslation } from 'next-export-i18n'
const Copyright = ({className = '',...props}):JSX.Element => {
    const { t } = useTranslation()
    return (
        <a href="https://michaelstudioo.com/" target="__blank" className={`${styles.copyright}`}>
            <span>{t('OTHER.COPYRIGHT')}</span>
            <div  className={styles.copyright__img}>
                <LazyLoadImage
                    width={31}
                    height={22}
                    src="/images/molecules/Footer/Copyright/logo.png"
                    alt="Michael studio"
                />
            </div>
            <span>Michaelstudioo</span>
        </a>
    )
}
export default Copyright
