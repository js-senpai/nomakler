import dynamic from "next/dynamic";

const Image = dynamic(()=>import('next/image'))
import styles from './Copyright.module.sass'
const Copyright = ({className = '',...props}):JSX.Element => {
    return (
        <a href="https://michaelstudioo.com/" className={`${styles.copyright}`}>
            <Image
                width={263}
                height={22}
                src="/images/molecules/Footer/Copyright/img.svg"
                alt="Michael studio"
                quality="60"
                layout="responsive"
            />
        </a>
    )
}
export default Copyright
