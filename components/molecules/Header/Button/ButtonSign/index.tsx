import ButtonWithIcon from "../../../../atoms/Button/ButtonWithIcon";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useTranslation from 'next-translate/useTranslation'
const ButtonSign = ({...props}):JSX.Element => {
    const { t } = useTranslation()
    return(
        <ButtonWithIcon {...props} text={t('button:SIGN')}>
            <FontAwesomeIcon icon={faUser} />
        </ButtonWithIcon>
    )
}

export default ButtonSign
