import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Message from './message';
import Container from 'react-bootstrap/Container';
import { Routers, Route, Link, Routes, useNavigate, Outlet } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import '../css/header.css';
import React, { useState } from 'react';




function Header() {

    const navigaet = useNavigate();

    return (

        <div >
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => { navigaet('/') }}>Stx Network Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* 첫번째 메뉴 */}
                            <NavDropdown title="회사소개" id="basic-nav-dropdown" className='menu1'>
                                <NavDropdownMenu1 />
                            </NavDropdown>


                            {/* 두번째 메뉴 */}
                            <NavDropdown title="사업분야" id="basic-nav-dropdown" className='menu2'>
                                <NavDropdownMenu2 />
                            </NavDropdown>

                            {/* 세번째 메뉴 */}
                            <NavDropdown title="고객지원" id="basic-nav-dropdown" className='menu3'>
                                <NavDropdownMenu3 />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div>

    )
}

export default Header;


function NavDropdownMenu1() {

    const navigaet = useNavigate();

    return (
        <div className='menu1_item'>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>CEO인사말</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">연혁</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">조직도</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">비전</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">윤리경영</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">CI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">관계사 소개</NavDropdown.Item>
        </div>
    )
}

function NavDropdownMenu2() {

    const navigaet = useNavigate();

    return (
        <div className='menu1_item'>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>ICT Service</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>IT Outsourcing</NavDropdown.Item>
        </div>
    )
}

function NavDropdownMenu3() {

    const navigaet = useNavigate();

    return (
        <div className='menu1_item'>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>공지사항</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>찾아오시는 길</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { navigaet('/message') }}>견적문의</NavDropdown.Item>
        </div>
    )
}