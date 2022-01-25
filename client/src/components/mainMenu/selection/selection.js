import Fade from 'react-bootstrap/Fade'
import { Row, Col } from 'react-bootstrap'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'

import {GoogleLogin} from 'react-google-login'
import {loginProcess} from '../../../redux/actions/loginActions.js'
import { useNavigate } from 'react-router-dom'

const Selection = ({setstate}) => {
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
    
          setstate(0)
      }

    return (
        <Fade appear={true} in={true}>
            <Row className={styles.theRow}>
                <Col className={styles.freeColumn}>
                    <h1>Start Now!</h1>
                    <p>For Free</p>
                </Col>
                <Col>
                    <GoogleLogin clientId={'71825131047-g77sla1hs6hl3fo3m533kf2ppes9la4v.apps.googleusercontent.com'} render={(renderProps) => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={styles.buttonGoogle}> Google Log in </button>
                    )} onSuccess={googleSuccess} onFailure={(error, details) => googleFailure(error, details)} cookiePolicy='single_host_origin'/>
                </Col>
            </Row>
        </Fade>
    )
}

export default Selection