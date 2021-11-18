import dynamic from "next/dynamic";
const Image = dynamic(()=>import('next/image'))
import {faBed,faShower,faRulerCombined} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// Import components
const BlockContainer = dynamic(() =>
    import('../../../containers/BlockContainer')
)
const LinkPrimary = dynamic(() =>
    import('../../../atoms/Link/LinkPrimary')
)
import { useTranslation } from 'next-export-i18n'
import {ApartmentsItemProps} from "./ApartmentsItem.props";
import styles from './ApartmentItem.module.sass'
import customLoader from "../../../../loaders/customLoader";
const Badge = dynamic(() =>
    import('../../../atoms/Badge')
)
const ApartmentItem = ({
                       img = '/images/molecules/Catalog/Apartment/item-1.jpg',
                       verified = true,
                       ready = true,
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
                        src={img}
                        alt={title}
                        quality="50"
                        layout="fill"
                    />: null
                }
                {
                    ready ? <Badge className={`${styles.apartmentItem__badge} ${styles.apartmentItem__badgeReadyRent}`}>{t('APARTMENT.READY_RENT')}</Badge>: null
                }
                {
                    verified ? <Badge className={`${styles.apartmentItem__badge} ${styles.apartmentItem__badgeVerified}`}>{t('APARTMENT.VERIFIED')}</Badge>: null
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
                        <div className={styles.apartmentItem__price__text}>{t('APARTMENT.PRICE_CURRENCY')}</div>
                    </div>
                    {
                        slug ? <LinkPrimary url={`/apartment/${slug}`}>{t('BUTTON.MORE_INFO')}</LinkPrimary>:null
                    }
                </footer>
            </div>

        </BlockContainer>
    )
}
export default ApartmentItem
