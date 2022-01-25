import styles from './styles.module.scss'

import { Row, Col } from 'react-bootstrap'

import { useState } from "react"
import { Fade } from 'react-bootstrap'

import AccountSettings from './accountSettings/accountSettings.js'

const Settings = ({setSettings}) => {
    const [settingsPage, setSettingsPage] = useState(0)

    const handleClose = () => setSettings(false)

    return(
        <Fade appear={true} in={true}>
            <div className={styles.settingsBackground}>
                <div className={styles.settingsPanel}>
                    <button onClick={handleClose} style={{height: '20px', padding:'5px'}}><p>x</p></button>
                    <Row className={styles.theContainer}>
                        <Col className={styles.optionContainer}>
                            {
                                // eslint-disable-next-line
                                <a onClick={() => setSettingsPage(0)}>Account</a>
                            }
                        </Col>
                        <Col className={styles.settingsContainer}>
                            {
                                settingsPage === 0
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

export default Settings