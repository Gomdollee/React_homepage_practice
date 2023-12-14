import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bg from './img/tech.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'
import { useState, useEffect } from 'react';
import { Routers, Route, Link, Routes, useNavigate, Outlet } from 'react-router-dom'
import Message from './\bcomponent/message';


function App() {

  const [intro] = useState(data);
  const navigaet = useNavigate();

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=>{ navigaet('/') }}>Stx Network Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigaet('/') }}></Nav.Link>
              <Nav.Link onClick={()=>{ navigaet('/message') }}>인사말</Nav.Link>
              <Nav.Link href="/info" element={<Message/>}>사업소개</Nav.Link>
              <Nav.Link href="/estimate">견적문의</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}> </div>
            <Container>
              <Row>
                {
                  intro.map((a, i) => {
                    return <SubCard intro={intro[i]} i={i + 2}></SubCard>
                  })
                }
              </Row>
            </Container>
          </div>
        } />
        <Route path='/message' Component={Message}/>
        
        <Route path='/info' element={<Info/>}>  {/* nested routes */}
          <Route path='/info/member' element={<Info/>}/> 
          <Route path='/info/location' element={<Info/>}/> 
        </Route>

        <Route path='/estimate' element={<div>견적문의</div>} />
        <Route path='*' element={<div>404페이지</div>}></Route>
      </Routes>



    </div>
  );
}

export default App;


function SubCard(props) {
  return (
    <Col sm>
      <div className={'tech' + props.i}></div>
      <h4>{props.intro.title}</h4>
      <p>{props.intro.content}</p>
    </Col>
  )
} 

function Info() {
  return (
    <div>
      <h4>사업소개</h4>
    </div>
  )
}
