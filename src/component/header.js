import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
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
            <div className="brand"><a className="brandForA" href='/'>
                <span className="stx">Stx</span> Network Service</a>
            </div>
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/about">회사소개</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/message">CEO 인사말</a></li>
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
                    <a href="/introduce">사업분야</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/introduce">ICT Service</a></li>
                            <li><a href="/introduce">IT Outsourcing</a></li>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a href="/contact">고객지원</a>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/contact1">공지사항</a></li>
                            <li><a href="/directions">찾아오시는 길</a></li>
                            <li><a href="/contact3">견적문의</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Header;

