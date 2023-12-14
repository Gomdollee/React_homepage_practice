import React, { useEffect, useState } from "react";
import { Routers, Route, Link, Routes } from 'react-router-dom'
import '../App.css';


function Message() {

const txt = "STX네트워크서비스 방문을 환영합니다. "
const [text, setText] = useState('');
const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(text + txt[count]); //이전 set한 문자 + 다음문자 
            setCount(count +1); // 개수 만큼 체크 
        }, 100);
        if(count === txt.length) { // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 etInterval을 해체
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해체 
    })

    return (
      <div className="message-bg">
        <div className="message-top">{ text }</div>
        <div className="message-middle"> 
            최근 몇 년간 비즈니스 환경은 그 어느 때 보다 빠르게 변화하고 있습니다. <br></br>
            스마트 기술을 기반으로 하는 혁신기업들이 산업의 판도를 바꾸어 나가고<br></br>
            전통산업 영역의 기업들도 디지털 비즈니스로의 전환을 빠르게 시도하고 있습니다.<br></br> 
            기업들은 새로운 산업 패러 다임과 글로벌 IT환경에 맞는 <br></br>
            디지털 기술을 개발 및 활용하여 비즈니스를 전개할 수 있어야 합니다.
        </div>
        <div className="message-bottom"> STX 네트워크서비스(주) 대표이사 이명구</div>
      </div>
    )
}

export default Message;