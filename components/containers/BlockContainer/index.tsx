import styles from './BlockContainer.module.sass'
import {BlockContainerProps} from "./BlockContainer.props";
const BlockContainer = ({children,className = '',...props}:BlockContainerProps):JSX.Element => {
    return (
        <div {...props} className={`${styles.blockContainer} ${className}`}>
            {children}
        </div>
    )
}

export default BlockContainer
