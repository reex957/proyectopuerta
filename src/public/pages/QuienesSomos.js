import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/style_QS.css";

export default function QuienesSomos() {
  return (
    <div className="">
      <div className="wide-image-container IAS">
        <img
          src="../images/about.png"
          alt="Imagen"
          className="wide-image img-fluid mb-3"
        />
        <h2 className="wide-image-text">Acerca de Nosotros</h2>
      </div>
      <div className="container">
        <Row className="mt-4">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Una empresa confiable</h2>
              <p>
                Somos una empresa líder en soluciones integrales para la
                seguridad del hogar. Con más de una década de experiencia, nos
                especializamos en proporcionar sistemas avanzados de alarmas,
                videovigilancia y control de acceso para proteger lo que más
                importa: tu hogar y tu familia.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <img
              src="../images/a1.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <img
              src="../images/a2.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Nuestro equipo de trabajo</h2>
              <p>
                Nuestro equipo de expertos en seguridad trabaja incansablemente
                para ofrecerte la tranquilidad y la protección que mereces.
                Desde sistemas de alarma conectados a centros de monitoreo 24/7
                hasta cámaras de alta definición y cerraduras inteligentes, en
                Seguridad Hogar S.A. nos comprometemos a brindarte la tecnología
                más avanzada y confiable para mantener tu hogar seguro en todo
                momento.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2>Plantech</h2>
              <p>
                “En Plantech creemos que el poder de la tecnología puede aportar
                comodidad y seguridad a la vida de las personas. Ya sea un
                hogar, una empresa o una institución pública, ofrecemos
                productos de cerraduras inteligentes confiables y de alta
                calidad para satisfacer una variedad de necesidades de
                seguridad”.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <img
              src="../images/a3.png"
              alt="Imagen"
              className="img-fluid mb-3 IABS"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
