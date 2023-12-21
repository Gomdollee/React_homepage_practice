import React from 'react';
import '../css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="your_logo.png" alt="Company Logo" />
      </div>
      <div className="footer-info">
        <p>회사 정보</p>
        <p>주소</p>
        {/* 필요한 회사 정보 등을 여기에 추가할 수 있습니다 */}
      </div>
    </footer>
  );
};

export default Footer;