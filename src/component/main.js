import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return (
        <div>
            <div className="main-bg">
                <Card></Card>
            </div>
        </div>
    )
}

export default Main;

function Card() {
    return (
        <Container className='main-card'>
            <Row>
                <Col>
                    <div className='tech2'>인사말 </div>
                        <span className='tech2_sp'>Ceo Message</span>
                </Col>
                <Col>
                    <div className='tech3'>사업소개</div>
                </Col>
                <Col>
                    <div className='tech4'>견적문의</div>
                </Col>
                <Col>
                    <div className='tech5'>오시는길</div>
                </Col>
            </Row>
        </Container>
    )
}