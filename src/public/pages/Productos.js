import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ProductoCard from './ProductoCard';
import '../../styles/style_PP.css';

export default function PrivacyPolicy() {
  return (
    <div className="">
      <Row className="justify-content-center my-5">
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
    </div>
  );
}
