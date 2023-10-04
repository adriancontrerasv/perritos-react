import defaultImg from '../components/assets/default.jpg'
import './styles/PuppyCard.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const PuppyCard = ({ raza }) => {
    const [img, setImg] = useState(defaultImg)
    const getImg = () => {
        axios.get('https://dog.ceo/api/breed/' + raza.raza.toLowerCase().replace(/\s/g, '/') + '/images').then((response) => {
            setImg(response.data.message[Math.ceil(Math.random() * (response.data.message.length - 1))])
        }).catch((error) => {
            console.log(error);
        });
    }
    const handleErrorImg = ({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = defaultImg
    }
    const handleClick = () => {
        "https://www.google.com/search?q=Google+tutorial+create+link"
    }

    useEffect(() => {
        getImg()
    }, [raza])

    return (
        <Col data-testid={raza.raza.replace(/\s/g, '-')} xs={11} sm={6} md={4} lg={4} xl={3} className='d-flex justify-content-center'>
            <Col xs={12} sm={11} md={11} lg={11} xl={11}>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 300, hide: 200 }}
                    overlay={<Tooltip>Buscar mas info de esta raza</Tooltip>}
                >
                    <a id={raza.raza.replace(/\s/g, '+') + '-link'} href={'https://www.google.com/search?q=' + raza.raza.replace(/\s/g, '+') + '+perro'} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                        <Card onClick={handleClick} className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center mt-4 shadow-sm puppyCard'>
                            <Image src={img} roundedCircle className='avatar mt-3' onError={handleErrorImg} fluid />
                            <Card.Body className='justify-content-center text-center'>
                                <Card.Title className='full-width text-center titleCard'>{raza.raza}</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </OverlayTrigger>
            </Col>
        </Col>
    )
}
