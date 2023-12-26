import { useEffect } from "react";
import '../css/Directions.css';


const { kakao } = window;

function Directions() {

    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.529236937904656, 126.92080072710117), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        // map 
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        //마커 표시 
        const markerPosition = new kakao.maps.LatLng(37.529236937904656, 126.92080072710117);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        const content = '<div class="customoverlay">' +
            '  <a href="https://map.kakao.com/link/map/서울시 영등포구 국회대로70길 19 801호 ,37.529236937904656, 126.92080072710117" target="_blank">' +
            '    <span class="title">STX 네트워크 서비스</span>' +
            '  </a>' +
            '</div>';

        const position = new kakao.maps.LatLng(37.529236937904656, 126.92080072710117);


        // 커스텀 오버레이를 생성합니다
        const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });

        // 페이지 로딩 시 나타나는 효과
        const header = document.querySelector('.header');
        const subInfo = document.querySelector('.sub-info');

        const fadeInElements = [header, subInfo];

        fadeInElements.forEach((element) => {
            if (element) {
                element.classList.add('fade-in');
            }
        });

        if (header) {
            setTimeout(() => {
                header.style.opacity = 1;
            }, 100);
        }
    }, []);





    return (
        <div className="main">
            <div className="header-wrap">
                <h2 className="header">STX 네트워크 서비스 본사</h2>
            </div>
            <div className="sub-info">
                <SubInfo />
            </div>
            <div className="map-container">
                <div id="map" className="map"></div>
            </div>
        </div>
    );
}

export default Directions;


function SubInfo() {
    return (
        <table className="company-info">
            <tbody>
                <tr>
                    <th>위치</th>
                    <td>서울시 영등포구 국회대로70길 19 801호</td>
                </tr>
                <tr>
                    <th>전화번호</th>
                    <td>02-853-0072</td>
                </tr>
                <tr>
                    <th>우편번호</th>
                    <td>08506</td>
                </tr>
                <tr>
                    <th>팩스번호</th>
                    <td>02-853-7187</td>
                </tr>
            </tbody>
        </table>
    )
}
