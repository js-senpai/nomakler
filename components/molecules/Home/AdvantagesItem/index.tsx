// Import components
import dynamic from "next/dynamic";
import styles from './AdvantagesItem.module.sass'
import {AdvantagesItemProps} from "./AdvantagesItem.props";
const BlockContainer = dynamic(() =>
    import('../../../containers/BlockContainer')
)
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AdvantagesItem = ({img = '/LazyLoadImages/organisms/Home/Advantages/search.svg',title = '',description = '',...props}:AdvantagesItemProps):JSX.Element => {
    return (
        <BlockContainer {...props} className={styles.advantagesItem}>
            {
                img.length ? <div className={styles.advantagesItem__img}>
                    <LazyLoadImage
                        width={69}
                        height={68}
                        src={img}
                        alt="icon"
                    />
                </div>: null
            }
            {
                title ? <div className={styles.advantagesItem__title}>{title}</div>:null
            }
            {
                description ? <div className={styles.advantagesItem__description}>{description}</div>:null
            }


        </BlockContainer>
    )
}
export default AdvantagesItem
