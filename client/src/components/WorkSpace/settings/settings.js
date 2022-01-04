import styles from './styles.module.scss'

import { useState } from "react"
import { Collapse, Fade, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'

import AccountSettings from './accountSettings/accountSettings.js'
import { VertLineNL } from '../../../utilities/ui'

export default ({setSettings}) => {
    const [nombre, setNombre] = useState('nombre')
    const [settingsPage, setSettingsPage] = useState(0)

    const handleClose = () => setSettings(false)

    return(
        <Fade appear={true} in={true}>
            <div className={styles.settingsBackground}>
                <div className={styles.settingsPanel}>
                    <button onClick={handleClose} style={{height: '20px', padding:'5px'}}><p>x</p></button>
                    <Row className={styles.theContainer}>
                        <Col className={styles.optionContainer}>
                            <a onClick={() => setSettingsPage(0)}>Account</a>
                        </Col>
                        <Col className={styles.settingsContainer}>
                            {
                                settingsPage == 0
                                    ? <AccountSettings/>
                                    : null
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </Fade>
    )
}