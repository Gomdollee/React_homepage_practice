import React from 'react';
import '../css/Footer.css'; 
import footerImg from'../img/logo_footer.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerImg} alt="Company Logo" />
      </div>
      <div className="footer-info">
        <p>STX네트워크서비스 주식회사 | 대표이사 이명구 | 서울시 금천구 가산디지털1로 151, 이노플렉스1차 705호</p>
        <p>TEL : 02-853-0072 | FAX : 02-853-7187 | E-mail : stxns@stx.co.kr</p>
        <p>COPYRIGHTS2019 STX Network Service. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;