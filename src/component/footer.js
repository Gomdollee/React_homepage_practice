import logo from '../img/logo_footer.png'
import '../css/footer.css'

function Footer() {
    return(
        <div className='main_footer'>
            <div> <img className='logo_footer' src={ logo } alt='logo_footer'/></div>
            <div className='content_footer'> 
                STX네트워크서비스 주식회사 | 대표이사 이명구 | 서울시 영등포구 국회대로70길 19 801호 &nbsp;
                &nbsp; &nbsp; TEL : 02-853-0072 | FAX : 02-853-7187 | E-mail : stxns@stx.co.kr <br/>
                COPYRIGHTS2019 STX Network Service. ALL RIGHTS RESERVED
            </div>
        </div>
    )
}

export default Footer;