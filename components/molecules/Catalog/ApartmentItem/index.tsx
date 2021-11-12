import dynamic from "next/dynamic";
import Image from "next/image";
import {faBed,faShower,faRulerCombined} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// Import components
const BlockContainer = dynamic(() =>
    import('../../../containers/BlockContainer')
)
const LinkPrimary = dynamic(() =>
    import('../../../atoms/Link/LinkPrimary')
)
import useTranslation from 'next-translate/useTranslation'
import {ApartmentsItemProps} from "./ApartmentsItem.props";
import styles from './ApartmentItem.module.sass'
const ApartmentItem = ({
                       img = '/images/molecules/Catalog/Apartment/item-1.jpg',
                       verified = false,
                       ready = false,
                       title = '',
                       sleepingPlaces = 0,
                       shower = 0,
                       dimensions = 0,
                       address = '',
                       slug = '',
                       price = 0,
                       ...props}:ApartmentsItemProps):JSX.Element => {
    const {t} = useTranslation()
    return (
        <BlockContainer {...props} className={`${styles.apartmentItem}`}>
            <div className={styles.apartmentItem__img}>
                {
                    img ?
                    <Image
                        width={350}
                        height={232}
                        src={img}
                        alt={title}
                        layout="responsive"
                    />: null
                }
            </div>
            <div className={styles.apartmentItem__content}>
                <h3 className={styles.apartmentItem__title}>{title ? title: 'title'}</h3>
                <ul className={styles.apartmentItem__infoList}>
                    <li className={styles.apartmentItem__infoList__item}>
                        <FontAwesomeIcon icon={faBed} />
                        <div>{sleepingPlaces || 0}</div>
                    </li>
                    <li className={styles.apartmentItem__infoList__item}>
                        <FontAwesomeIcon icon={faShower} />
                        <div>{shower || 0}</div>
                    </li>
                    <li className={styles.apartmentItem__infoList__item}>
                        <FontAwesomeIcon icon={faRulerCombined} />
                        <div>{dimensions || 0}</div>
                    </li>
                </ul>
                <div className={styles.apartmentItem__address}>{ address ? <div>{address}</div>: null }</div>
                <footer className={styles.apartmentItem__footer}>
                    <div className={styles.apartmentItem__price}>
                        <div className={styles.apartmentItem__price__number}>{price || 0}</div>
                        <div className={styles.apartmentItem__price__text}>{t('apartment:PRICE_CURRENCY')}</div>
                    </div>
                    {
                        slug ? <LinkPrimary url={`/apartment/${slug}`}>{t('button:MORE_INFO')}</LinkPrimary>:null
                    }
                </footer>
            </div>

        </BlockContainer>
    )
}
export default ApartmentItem
