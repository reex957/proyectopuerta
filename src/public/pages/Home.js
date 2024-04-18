import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import ProductoCard from './ProductoCard';
import '../../styles/styleHome.css';

export default function Home() {
  return (
    <div className="text-center"> {/* Agrega la clase text-center para centrar el contenido */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/banner.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/banner3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Row className="justify-content-center my-5">
        <h1 className="TfbN">Featured Blogs And News</h1>
        <Col xs={12} sm={6} md={4} lg={3} className="sds">
          <div className="card-container border rounded p-3 ssd">
          <div className="">
            <ProductoCard titulo="Camara de vigilancia 360" descripcion="Descripción de la cámara de vigilancia 360." imagenUrl="../images/p1.png"/>
          </div>
            <p className="text-muted small mt-2">January 29 2024</p>
            <h4 className="mt-2 text-left">Upgrade to the Locstar-C88 Tuya Bluetooth 4.1 App Password Mechanical Key Keypad Deadbolt</h4>
            <a href="#" className="mt-2">Leer más</a>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="sds">
          <div className="card-container border rounded p-3 ssd">
          <div className="">
            <ProductoCard titulo="Sensor RFID" descripcion="Descripción del sensor RFID." imagenUrl="../images/p2.png"/>
          </div>
            <p className="text-muted small mt-2">January 29 2024</p>
            <h4 className="mt-2 text-left">Unlocking the Future: The Smart Bluetooth Deadbolt</h4>
            <a href="#" className="mt-2">Leer más</a>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="sds">
          <div className="card-container border rounded p-3 ssd">
          <div className="">
            <ProductoCard titulo="Sensor de huella digital" descripcion="Sistema de seguridad dactilar para puertas." imagenUrl="../images/p3.png"/>
          </div>
            <p className="text-muted small mt-2">January 29 2024</p>
            <h4 className="mt-2 text-left">Why You Need a Smart Bluetooth Deadbolt Lock</h4>
            <a href="#" className="mt-2">Leer más</a>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col xs={10} md={5} lg={6}>
          <img src="../images/support.png" alt="Imagen" className="img-fluid mb-3" />
        </Col>
        <Col xs={10} md={5} lg={4} className="text-start mt-5 pr-5">
          <h2 className="mt-5 TsP">Need Help?</h2>
          <p className="mt-3">Get all the support you need in our smart help center.</p>
          <a className="mt-1 BsP">Saber mas</a>
        </Col>
      </Row>
    </div>
  );
}
