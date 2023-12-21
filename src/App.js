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
import Main from './\bcomponent/main';
import Header from './\bcomponent/header';
import Footer from './\bcomponent/footer';

function App() {
  const navigaet = useNavigate();

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Routes>
        <Route path='/message' Component={Message} />
      </Routes>
    </div>
  );
}

export default App;


