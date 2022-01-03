import styles from './styles.module.scss'

import { Button, Col, Fade, Form, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import {GoogleLogin} from 'react-google-login'

import { BotonAtrasNL } from '../../../utilities/ui'

export default ({setstate}) => {
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        console.log(res)
    }
    const googleFailure = () => {
        console.log('Google Error')
        setstate(0)
    }

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
                        <GoogleLogin clientId='71825131047-g77sla1hs6hl3fo3m533kf2ppes9la4v.apps.googleusercontent.com' render={(renderProps) => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Google </button>
                        )} onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy='single_host_origin'/>
                    </Row>
                    <Row>
                    </Row>
                </Form>
            </div>
        </Fade>
    )
}