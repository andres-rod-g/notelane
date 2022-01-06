import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const BotonNL = ({Clicking = () => console.log('Hola'), text= 'Hola'}) => {
    return (
        <button className={styles.botonNLDefault} onClick={() => Clicking()} >{text}</button>
    )
}

export const BotonAtrasNL = ({setstate}) => {
    return (
        <button className={styles.backButton} onClick={() => setstate(0)} ><FontAwesomeIcon icon={faChevronLeft}/></button>
    )
}

export const VertLineNL = () => {
    return (
        <div className={styles.vertLine}/>
    )
}