import React, { useEffect, useState } from "react";
import '../css/Introduce.css';
import backgroundImg from '../img/tech3.jpg';
import content1 from '../img/content-1.png';
import content2 from '../img/content-2.png';
import content3 from '../img/content-3.png';

function Introduce() {
    const [textVisibility, setTextVisibility] = useState(false); // 글자 보임 여부 상태 설정
    const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로드 여부 상태 설정

    useEffect(() => {
        const image = new Image();
        image.src = backgroundImg;
        image.onload = () => {
            setImageLoaded(true);
            setTimeout(() => {
                setTextVisibility(true);
            }, 300);
        };
    }, []);

    return (
        <div className={`introduce-bg ${imageLoaded ? "image-loaded" : ""}`}>
          <div className={`content-wrapper ${textVisibility ? "visible" : ""}`}>
            <h1 className="intro-text">최적의 IT서비스를 제공합니다.</h1>
          </div>
          <div className={`content-1 ${textVisibility ? "visible" : ""}`}>
            <img src={ content1 } alt="Content 1" />
          </div>
          <div className={`content-2 ${textVisibility ? "visible" : ""}`}>
            <img src={ content2 } alt="Content 2" />
          </div>
          <div className={`content-3 ${textVisibility ? "visible" : ""}`}>
            <img src={ content3 } alt="Content 3" />
          </div>
        </div>
      );
    }

export default Introduce;