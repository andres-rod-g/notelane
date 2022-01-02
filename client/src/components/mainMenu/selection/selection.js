import Fade from 'react-bootstrap/Fade'
import { BotonNL } from "../../../utilities/ui"
import { Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'

export default ({setstate}) => {
    return (
        <Fade appear={true} in={true}>
            <Row>
                <Col className={styles.freeColumn}>
                    <h1>Start Now!</h1>
                    <p>For Free</p>
                </Col>
                <Col>
                    <BotonNL Clicking={() => setstate(1)} text='Log In'/>
                        <p style={{margin:'10px'}}>Or</p>
                    <BotonNL Clicking={() => setstate(2)} text='Sign Up'/>
                </Col>
            </Row>
        </Fade>
    )
}