import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTypingEffect from 'react-typing-effect'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../NLLogo.png'
import { Col, Row, Container, Image } from 'react-bootstrap'
import Selection from './selection/selection'
import Login from './login/login'
import Register from './register/register'

import '../../App.scss';
import { VertLineNL } from '../../utilities/ui';

export default function Index() {
  const navigate = useNavigate()
  const [state, setstate] = useState(0)

  const user = localStorage.getItem('User')

  useEffect(() => {
    if (user) {
      navigate('/workspace')
    }
    // eslint-disable-next-line
  }, [navigate])

  return (
    <Container className='pageContainer'>
    <Row className='pageRow d-flex justify-content-center align-items-center'>
        <Col xs={12} lg={6} className='colTitleContainer'>
        <Image src={logo} alt='Imagen' style={{width:'60px'}}/>
        <div className='colTitle'>
            <p className='pageTitle'>Notelane</p>
            <ReactTypingEffect className='typeEffect' text={['Elegant', 'Simple', 'Everything.']} speed={80} eraseSpeed={40} typingDelay={700}/>
        </div>
        </Col>
        <VertLineNL/>
        <Col xs={12} lg={6} className='colSelection'>
        {
            state === 0
            ? <Selection setstate={setstate}/>
            : state === 1
                ? <Login setstate={setstate}/>
                : <Register setstate={setstate}/>
        }
        </Col>
    </Row>
    </Container>
  );
}