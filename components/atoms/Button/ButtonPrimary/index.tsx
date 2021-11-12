import {forwardRef} from "react";
import {ButtonPrimaryProps} from "./ButtonPrimary.props";

const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
    ({ block,className = '', ...props }, ref) => {
   return (
       <button
           ref={ref}
           className={`
           button-a
           button-primary
           ${block && 'block'}
           ${block && 'w-full'}  
           ${className}
           `}
       />
   )
})
ButtonPrimary.displayName = 'ButtonPrimary'
export default ButtonPrimary
