import styles from './styles.module.scss'

import { useNavigate } from 'react-router-dom'
import { Col, Fade, Form, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import {GoogleLogin} from 'react-google-login'
import {loginProcess} from '../../../redux/actions/loginActions.js'

import { BotonAtrasNL } from '../../../utilities/ui'

export default ({setstate}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch(loginProcess(result))
            setTimeout(() => navigate('/workspace'), 1000)
        } catch (error) {
            console.log(error)
        }
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
                        <GoogleLogin clientId={process.env.REACT_APP_CLIENT_ID} render={(renderProps) => (
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