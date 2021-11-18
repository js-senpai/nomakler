import {LogoProps} from "./Logo.props";
import Link from "next/link";
import styles from './Logo.module.sass'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Logo = ({src = '',className = '',priority = false,...props}:LogoProps):JSX.Element => {
  return (
      <div {...props} className={`${styles.logo} ${className}`}>
          <Link href="/" >
              <a>
                  {src.length ? <LazyLoadImage
                      width={200}
                      height={37}
                      src={src}
                      alt="Logo"
                  />: 'Logo'}
              </a>
          </Link>
      </div>


  )
}
export default Logo
