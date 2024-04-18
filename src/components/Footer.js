import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom';
import '../Estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Elimina faArrowRight de aquí
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Mantén faArrowRight aquí

export default function Footer() {
    const whatsappLink = "https://www.whatsapp.com/";
    const facebookLink = "https://www.facebook.com/";
    const instagramLink = "https://www.instagram.com/";
    const twitterLink = "https://twitter.com/";
    return (
        <div className='footer'>
            <Container>
                <Row className="justify-content-around">
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Apoyo</h4>
                        <ul className='linkF'>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.faq}>Preguntas Frecuentes</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.quienesSomos}>Quienes somos</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.contacto}>Contacto</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Suscribete a Plantech</h4>
                        <ul className='linkF'>
                            <li>
                                {/* Agrega enlaces a los iconos */}
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="socialIcon" />
                                </a>
                                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="socialIcon" />
                                </a>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
                                </a>
                                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="socialIcon" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 style={{ color: '#ffffff' }}>Plantech</h4>
                        <ul className='linkF'>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Política de privacidad</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Política de envios</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.p1}>Política de reembolso</Link></li>
                            <li><Link style={{ color: '#aaaeb6' }} className='linksF' to={routes.ts}>Terminos de servicio</Link></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <p style={{ color: '#aaaeb6' }}>Obtén más información<br /> introduce tu correo electrónico para suscribirte a nuestra newsletter:</p>
                        <div style={{ position: 'relative' }}>
                            <input type="text" className="inputCorreo" placeholder="Correo electrónico" />
                            <button className="botonFlecha">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
