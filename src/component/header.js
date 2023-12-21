import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Dropdown이 열렸는지를 나타내는 상태

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <span className="stx">Stx</span> Network Service
            </div>
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/about">회사소개</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/about1">CEO 인사말</a></li>
                            <li><a href="/about2">연혁</a></li>
                            <li><a href="/about3">조직도</a></li>
                            <li><a href="/about4">비전</a></li>
                            <li><a href="/about4">윤리경영</a></li>
                            <li><a href="/about4">CI</a></li>
                            <li><a href="/about4">관계사소개</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/services">사업분야</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/service1">ICT Service</a></li>
                            <li><a href="/service2">IT Outsourcing</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/contact">고객지원</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/contact1">공지사항</a></li>
                            <li><a href="/contact2">찾아오시는 길</a></li>
                            <li><a href="/contact3">견적문의</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Header;


// <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand onClick={() => { navigaet('/') }}>Stx Network Service</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link onClick={() => { navigaet('/') }}></Nav.Link>
//               <Nav.Link onClick={() => { navigaet('/message') }}>인사말</Nav.Link>
//               <Nav.Link href="/info" element={<Message />}>사업소개</Nav.Link>
//               <Nav.Link href="/estimate">견적문의</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>