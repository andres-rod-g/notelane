import styles from './styles.module.scss'

import { useNavigate } from 'react-router-dom'
import { Col, Fade, Form, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import {GoogleLogin} from 'react-google-login'
import {loginProcess} from '../../../redux/actions/loginActions.js'

import { BotonAtrasNL } from '../../../utilities/ui'

const Login = ({setstate}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const googleSuccess = async (res) => {
        const result = res?.profileObj;

        try {
            dispatch(loginProcess(result))
            setTimeout(() => navigate('/workspace'), 1000)
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error, details) => {
        console.log(error)
        console.log(details)

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
                        <GoogleLogin clientId={'71825131047-g77sla1hs6hl3fo3m533kf2ppes9la4v.apps.googleusercontent.com'} render={(renderProps) => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Google </button>
                        )} onSuccess={googleSuccess} onFailure={(error, details) => googleFailure(error, details)} cookiePolicy='single_host_origin'/>
                    </Row>
                    <Row>
                    </Row>
                </Form>
            </div>
        </Fade>
    )
}

export default Login