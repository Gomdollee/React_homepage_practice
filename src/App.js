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
import Header from './\bcomponent/header';
import Footer from './\bcomponent/footer';
import Main from './\bcomponent/main';


function App() {

  const navigaet = useNavigate();

  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' Component={Main} />

        {/* 회사소개 */}
        <Route path='/message' Component={Message} />

         {/* 사업분야 */}
        <Route path='/estimate' element={<div>견적문의</div>} />
        <Route path='*' element={<div>404페이지</div>}></Route>

         {/* 고객지원 */}
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;


