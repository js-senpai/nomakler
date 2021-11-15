// Import components
import dynamic from "next/dynamic";
import {ActualApartmentsProps} from "./ActualApartments.props";
import { useTranslation } from 'next-export-i18n'
// Import components
const ApartmentItem  = dynamic(() =>
    import('../../../molecules/Catalog/ApartmentItem')
)
const DefaultContainer = dynamic(() =>
    import('../../../containers/DefaultContainer')
)
const FullWidthContainer = dynamic(() =>
    import('../../../containers/FullWidthContainer')
)
import styles from './ActualApartments.module.sass'
const ActualApartments = ({apartments = [],...props}: ActualApartmentsProps):JSX.Element => {
  const { t } = useTranslation()
  return (
      <section className={`${styles.actualApartments}`} {...props}>
          <DefaultContainer className={`${styles.actualApartments__container}`}>
              <h2 className={styles.actualApartments__title} dangerouslySetInnerHTML={{__html: t('HOME.APARTMENTS.TITLE')}} />
              <div className={styles.actualApartments__description}>{t('HOME.APARTMENTS.DESCRIPTION')}</div>
          </DefaultContainer>
          <FullWidthContainer>
              {apartments.length ?
                  <ul className={styles.actualApartments__list}>
                      {
                          apartments.map(({
                                              id,
                                              img = '/images/molecules/Catalog/Apartment/item-1.jpg',
                                              verified = false,
                                              ready = false,
                                              title = '',
                                              sleepingPlaces = 0,
                                              shower = 0,
                                              dimensions = 0,
                                              address = '',
                                              slug= '',
                                              price = 0,}) => (
                              <li key={id}>
                                  <ApartmentItem
                                      img={img}
                                      verified={verified}
                                      ready={ready}
                                      title={title}
                                      sleepingPlaces={sleepingPlaces}
                                      shower={shower}
                                      dimensions={dimensions}
                                      address={address}
                                      slug={slug}
                                      price={price}
                                  />
                              </li>
                          ))
                      }
                  </ul>
                  : null }
          </FullWidthContainer>
      </section>
  )
}
export default ActualApartments
