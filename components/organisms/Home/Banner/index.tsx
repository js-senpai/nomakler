import dynamic from "next/dynamic";
import styles from './Banner.module.sass'
import {BannerProps} from "./Banner.props";
// Import components
const DefaultContainer = dynamic(() =>
    import('../../../containers/DefaultContainer')
)
const Banner = ({homeBanner: {img = '/images/organisms/Banner/banner.jpg',title = '',description = ''},...props}:BannerProps):JSX.Element => {
    return(
        <section  className={styles.banner} style={{backgroundImage: `url(${img})`}}>
            <DefaultContainer className={`px-6`}>
                {title.length?<h1 className={styles.banner__title}>{title}</h1>: null}
                {description.length?<div className={styles.banner__description}>{description}</div>: null}
            </DefaultContainer>
        </section>
    )
}

export default Banner
