// Import components
import dynamic from "next/dynamic";
import {AdvantagesProps} from "./Advantages.props";

const DefaultContainer = dynamic(() =>
    import('../../../containers/DefaultContainer')
)
const AdvantagesItem = dynamic(() =>
    import('../../../molecules/Home/AdvantagesItem')
)
import styles from './Advantages.module.sass'
const Advantages = ({advantages = [],...props}:AdvantagesProps):JSX.Element => {
    return (
        <section  className={styles.advantages}>
            <DefaultContainer className={styles.advantages__container}>
                {
                    advantages.length ? advantages.map(({id,img,title,description}) => (<AdvantagesItem  key={id} img={img} title={title} description={description} />))  : null
                }
            </DefaultContainer>
        </section>
    )
}
export default Advantages
