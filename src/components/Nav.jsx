import './styles/Nav.css'
import Col from 'react-bootstrap/Col';
import img from '../components/assets/dog-logo.webp'
import Image from 'react-bootstrap/Image';

export const Nav = () => {
    return (
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex  align-content-center mt-5'>
            <Col xs={5} sm={5} md={5} lg={6} xl={6} className='d-flex justify-content-end'>
                <Image src={img} className={'dog-logo'} fluid />
            </Col>
            <Col xs={7} sm={7} md={7} lg={6} xl={6} className='row align-items-center'>
                <Col className='row align-items-center'>
                    <h1 className='ml-auto' style={{ fontFamily: 'Copperplate', marginLeft: '10px' }}>Perritos</h1>
                </Col>
            </Col>
        </Col>
    )
}
