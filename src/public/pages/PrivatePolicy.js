import React from "react";
import { Row, Col } from "react-bootstrap";
import '../../styles/style_PP.css';
export default function PrivacyPolicy() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Privacy Policy</h1>
      <p className="text-start">Last updated: 2024/03/27</p>

      <p>
        This Privacy Policy describes how Locstar the "Site", "we", "us", or
        "our" collects, uses, and discloses your personal information when you
        visit, use our services, or make a purchase from Locstar.com the "Site"
        or otherwise communicate with us collectively, the "Services". For
        purposes of this Privacy Policy, "you" and "your" means you as the user
        of the Services, whether you are a customer, website visitor, or another
        individual whose information we have collected pursuant to this Privacy
        Policy.
      </p>
      <p>
        Please read this Privacy Policy carefully. By using and accessing any of
        the Services, you agree to the collection, use, and disclosure of your
        information as described in this Privacy Policy. If you do not agree to
        this Privacy Policy, please do not use or access any of the Services.
      </p>
      <h2 className="mt-5">Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time, including to
        reflect changes to our practices or for other operational, legal, or
        regulatory reasons. We will post the revised Privacy Policy on the Site,
        update the "Last updated" date and take any other steps required by
        applicable law.
      </p>

      <h2 className="mt-5">How We Collect and Use Your Personal Information</h2>
      <p>
        To provide the Services, we collect and have collected over the past 12
        months personal information about you from a variety of sources, as set
        out below. The information that we collect and use varies depending on
        how you interact with us.
      </p>
      <p>
        In addition to the specific uses set out below, we may use information
        we collect about you to communicate with you, provide the Services,
        comply with any applicable legal obligations, enforce any applicable
        terms of service, and to protect or defend the Services, our rights, and
        the rights of our users or others.
      </p>
      {/* Continue adding sections as necessary */}
      <h3>What Personal Information We Collect</h3>
      <p>
        The types of personal information we obtain about you depends on how you
        interact with our Site and use our Services. When we use the term
        "personal information", we are referring to information that identifies,
        relates to, describes or can be associated with you. The following
        sections describe the categories and specific types of personal
        information we collect.
      </p>
      <h3>Information We Collect Directly from You</h3>
      <p>
        Information that you directly submit to us through our Services may
        include:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          Detalles básicos de contacto, incluyendo tu nombre, dirección, número
          de teléfono y correo electrónico.
        </li>
        <li>
          Información de pedidos, incluyendo tu nombre, dirección de
          facturación, dirección de envío, confirmación de pago, dirección de
          correo electrónico y número de teléfono.
        </li>
        <li>
          Información de la cuenta, incluyendo tu nombre de usuario, contraseña
          y preguntas de seguridad.
        </li>
        <li>
          Información de compras, incluyendo los artículos que visualizas,
          colocas en tu carrito o añades a tu lista de deseos.
        </li>
        <li>
          Información de soporte al cliente, incluyendo la información que
          elijas incluir en las comunicaciones con nosotros, por ejemplo, al
          enviar un mensaje a través de los servicios.
        </li>
      </ul>
      <p>
        Some features of the Services may require you to directly provide us
        with certain information about yourself. You may elect not to provide
        this information, but doing so may prevent you from using or accessing
        these features.
      </p>
      <h3>Information We Collect through Cookies</h3>
      <p>
        We also automatically collect certain information about your interaction
        with the Services ("Usage Data"). To do this, we may use cookies, pixels
        and similar technologies ("Cookies"). Usage Data may include information
        about how you access and use our Site and your account, including device
        information, browser information, information about your network
        connection, your IP address and other information regarding your
        interaction with the Services.
      </p>
      <Row className="mt-5 mb-5">
        <Col>
          <h3>Contact</h3>
          <p>
            Should you have any questions about our privacy practices or this
            Privacy Policy, or if you would like to exercise any of the rights
            available to you, please call +52 7712348363 or email us at
            plantech@gmail.com. You can also contact us at Huejutla de Reyes
            Hidalgo CP: 43000, Capitan Antonio Reyes.
          </p>
        </Col>
      </Row>
    </div>
  );
}
