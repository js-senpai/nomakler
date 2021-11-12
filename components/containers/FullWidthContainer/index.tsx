import {FullWidthContainerProps} from "./FullWidthContainer.props";
import './FullWidthContainer.module.sass'
const FullWidthContainer = ({children,className = ''}:FullWidthContainerProps):JSX.Element => <div className={`container-full mx-auto ${className}`}>{children}</div>
export default FullWidthContainer
