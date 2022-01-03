import 'bootstrap/dist/css/bootstrap.min.css';
import ReactTypingEffect from 'react-typing-effect'
import { useState } from 'react';

import logo from '../../NLLogo.png'
import { Routes, Route, Link } from "react-router-dom";
import { Col, Row, Container, Image } from 'react-bootstrap'
import Selection from './selection/selection'
import Login from './login/login'
import Register from './register/register'

import '../../App.scss';

export default function Index() {
  const [state, setstate] = useState(0)

  return (
    <Container className='pageContainer'>
    <Row className='pageRow d-flex justify-content-center align-items-center'>
        <Col xs={12} md={6} className='colTitleContainer'>
        <Image src={logo} alt='Imagen' style={{width:'60px'}}/>
        <div className='colTitle'>
            <p className='pageTitle'>Notelane</p>
            <ReactTypingEffect className='typeEffect' text={['Elegant', 'Simple', 'Everything.']} speed={80} eraseSpeed={40} typingDelay={700}/>
        </div>
        </Col>
        <div style={{borderLeft: '2px solid #F7EBE8', height: '250px', position:'absolute', left:'50%', width: '0'}}/>
        <Col xs={12} md={6} className='colSelection'>
        {
            state == 0
            ? <Selection setstate={setstate}/>
            : state == 1
                ? <Login setstate={setstate}/>
                : <Register setstate={setstate}/>
        }
        </Col>
    </Row>
    </Container>
  );
}