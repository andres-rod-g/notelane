import styles from './styles.module.scss'

import { useState } from "react"
import { Collapse, Fade, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'

export default () => {
    const [nombre, setNombre] = useState('nombre')

    return(
        <Fade appear={true} in={true}>
            <div className={styles.settingsBackground}>
                <div className={styles.settingsPanel}>
                    <button style={{height: '20px', padding:'5px'}}><p>x</p></button>
                    <Row className={styles.theContainer}>
                        <Col className={styles.optionContainer}>
                            Col1
                        </Col>
                        <Col>
                            Col2
                        </Col>
                    </Row>
                </div>
            </div>
        </Fade>
    )
}