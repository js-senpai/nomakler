// Import components
import dynamic from "next/dynamic";
const Image = dynamic(()=>import('next/image'))
import styles from './AdvantagesItem.module.sass'
import {AdvantagesItemProps} from "./AdvantagesItem.props";
const BlockContainer = dynamic(() =>
    import('../../../containers/BlockContainer')
)


const AdvantagesItem = ({img = '/images/organisms/Home/Advantages/search.svg',title = '',description = '',...props}:AdvantagesItemProps):JSX.Element => {
    return (
        <BlockContainer {...props} className={styles.advantagesItem}>
            {
                img.length ? <div className={styles.advantagesItem__img}>
                    <Image
                        width={69}
                        height={68}
                        src={img}
                        alt="icon"
                        quality="60"
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
