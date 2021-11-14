import dynamic from "next/dynamic";
import styles from './Banner.module.sass'
import {BannerProps} from "./Banner.props";
const Image = dynamic(()=>import('next/image'))
// Import components
const DefaultContainer = dynamic(() =>
    import('../../../containers/DefaultContainer')
)
const Banner = ({img = '/images/organisms/Home/Banner/banner.jpg',title = '',description = '',...props}:BannerProps):JSX.Element => {
    return(
        <section  className={styles.banner}>
            <Image
                src={img}
                alt={title}
                quality="40"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={true}
            />
            <DefaultContainer className="relative">
                {title.length?<h1 className={styles.banner__title}>{title}</h1>: null}
                {description.length?<div className={styles.banner__description}>{description}</div>: null}
            </DefaultContainer>
        </section>
    )
}

export default Banner
