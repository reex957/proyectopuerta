import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/style_Contact.css";

export default function Contacto() {
  return (
    <div className="container">
      <Row className="mt-5 mb-5">
        <Col md={8}>
          <h2>Formulario de Contacto</h2>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label className="d-flex mt-3">Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label className="d-flex mt-3">Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>
            <Form.Group controlId="formNumero">
              <Form.Label className="d-flex mt-3">Número de teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingrese su número de teléfono" />
            </Form.Group>
            <Form.Group controlId="formPais">
              <Form.Label className="d-flex mt-3">País</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su país" />
            </Form.Group>
            <Form.Group controlId="formTipoPregunta">
              <Form.Label className="d-flex mt-3">Tipo de pregunta</Form.Label>
              <Form.Control as="select">
                <option>Consulta general</option>
                <option>Soporte técnico</option>
                <option>Información sobre productos</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formComentario">
              <Form.Label className="d-flex mt-3">Comentario</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingrese su comentario" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-5">
              Enviar
            </Button>
          </Form>
        </Col>

        <Col md={4} className="mb-5 d-flex justify-content-end flex-column align-items-start">
          <strong className="d-flex sli">Work Time:</strong>
          <p className="d-flex"> 9:00-18:00</p>
          <strong className="d-flex sli">WhatsApp:</strong>
          <p className="d-flex"> +52 7712348363</p>
          <strong className="d-flex sli">E-mail:</strong>
          <p className="md-flex"> Plantech@gmail.com</p>
          <strong className="d-flex sli">Work Place:</strong>
          <p className="d-flex">Huejutla de Reyes
            Hidalgo CP: 43000, Capitan Antonio Reyes.</p>
        </Col>
      </Row>
    </div>
  );
}
