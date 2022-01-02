import styles from './styles.module.scss'

import { Col, Fade, Form, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { BotonAtrasNL } from '../../../utilities/ui'

export default ({setstate}) => {
    return (
        <Fade appear={true} in={true}>
            <div className={styles.theContainer}>
                <BotonAtrasNL setstate={setstate}/>
                <Form>
                    <Row className={styles.rowContainer}>
                        <Col className={styles.inputContainer}>
                            <label>E-Mail</label>
                            <label>Password</label>
                        </Col>
                        <Col className={styles.inputContainer}>
                            <input name='email'/>
                            <input name='pass' type='password'/>
                        </Col>
                        <Col className={styles.inputContainer}>
                            <button type='submit'><FontAwesomeIcon icon={faChevronRight}/></button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Fade>
    )
}