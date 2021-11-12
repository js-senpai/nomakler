import {DefaultContainerProps} from "./DefaultContainer.props";
import './DefaultContainer.module.sass'
const DefaultContainer = ({children,className = ''}:DefaultContainerProps):JSX.Element => <div className={`container mx-auto ${className}`}>{children}</div>
export default DefaultContainer
