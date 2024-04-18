import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../../styles/style_faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyPolicy() {
  const [mostrarTexto1, setMostrarTexto1] = useState(false);
  const [mostrarTexto2, setMostrarTexto2] = useState(false);
  const [mostrarTexto3, setMostrarTexto3] = useState(false);
  const [mostrarTexto4, setMostrarTexto4] = useState(false);
  const [mostrarTexto5, setMostrarTexto5] = useState(false);

  return (
    <div className="twmx">
      <Row className="justify-content-center my-5">
        <Col xs={12} className="text-center m-0 p-0">
          <h1>¿En que podemos ayudarte?</h1>
          <p className="mt-3">
            En esta página encontrarás información importante sobre cómo
            manejamos tus datos y tu privacidad.
          </p>

          <Row className="d-flex container justify-content-center mt-3 mb-5 m-auto">
            <Col xs={12} className="mb-4 container">
              <div className="container">
                {/* Primer conjunto de 3 recuadros */}
                <div className="row container d-flex justify-content-center">
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f1">
                      <span className="asd">Ayuda con los pagos</span>
                      <img
                        src="../images/f1.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f2">
                      <span className="asd">Ayuda con la cuenta</span>
                      <img
                        src="../images/f2.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 mb-4 d-flex justify-content-center">
                    <div className="efe f3">
                      <span className="asd">Ayuda con una compra</span>
                      <img
                        src="../images/f6.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                </div>
                {/* Segundo conjunto de 3 recuadros */}
                <div className="row container d-flex justify-content-center">
                  <div className="col-md-2 col-sm-6 col-xs-6 mb-4 d-flex justify-content-center">
                    <div className="efe f4">
                      <span className="asd">Ayuda con la aplicacion</span>
                      <img
                        src="../images/f3.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6 col-xs-6 mb-4 d-flex justify-content-center">
                    <div className="efe f5">
                      <span className="asd">Ayuda con un dispositivo</span>
                      <img
                        src="../images/f4.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-6  mb-4 d-flex justify-content-center">
                    <div className="efe f6">
                      <span className="asd">Seguridad y privacidad</span>
                      <img
                        src="../images/f5.png"
                        alt="Imagen"
                        className="rotate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <h4>Ayuda rapida</h4>

          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto1(!mostrarTexto1)}
              variant="primary"
            >
              <span>
                {mostrarTexto1 ? (
                  <>
                    No puedo iniciar
                    sesiónㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    No puedo iniciar
                    sesiónㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto1 && (
              <div className="container fsp" style={{ animation: "slideIn 0.5s ease" }}>
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Spotify, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto2(!mostrarTexto2)}
              variant="primary"
            >
              <span>
                {mostrarTexto2 ? (
                  <>
                    Ayuda con errores de pago
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    Ayuda con errores de pago
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto2 && (
              <div className="container fsp">
              <h2>Ayuda con errores de pago</h2>
              <p>
                Asegúrate de que tu método de pago tenga fondos suficientes y esté de la siguiente manera:
              </p>
              <ul style={{ listStyleType: "disc" }}>
                <li>Registrado en el mismo país de tu cuenta de Spotify.</li>
                <li>Vigente.</li>
                <li>Habilitado para realizar compras en el extranjero, transacciones en línea y recurrentes. Puedes configurar estas opciones desde la aplicación móvil de tu banco.</li>
              </ul>
              <p>
                También asegúrate de que tu banco o proveedor de pagos tenga tus datos correctos. Es posible que deban verificar tu identidad por cuestiones de seguridad a través de una contraseña, código PIN, huella dactilar o un código enviado a tu dispositivo.
              </p>
              <h3>¿Ninguna de estas opciones resolvió el problema?</h3>
              <ul style={{ listStyleType: "disc" }}>
                <li>Prueba volver a ingresar tus datos de pago desde una ventana de navegación privada o en el modo incógnito.</li>
                <li>Intenta con un método de pago diferente.</li>
                <li>Es posible que solo se trate de un problema de conexión temporal. Espera un par de horas e inténtalo de nuevo.</li>
                <li>Comunícate con tu proveedor de pagos.</li>
              </ul>
              <h3>¿Hubo un error con el pago regular?</h3>
              <p>
                Si hay un error con el pago mensual de tu suscripción, no perderás acceso a Premium de inmediato. Intentaremos volver a procesar el pago en los próximos días.
              </p>
              <h3>Pagos a través de una compañía asociada</h3>
              <p>
                Si te suscribiste al plan a través de una compañía asociada (p. ej. tu proveedor de Internet o de telefonía móvil), esa compañía administrará tus pagos. Deberás comunicarte con ella por cualquier asunto relacionado con los pagos.
              </p>
              <p>
                Para saber quién es tu proveedor o para comunicarte directamente con ellos, haz lo siguiente:
              </p>
              <ol>
                <li>Ve a la página de tu cuenta.</li>
                <li>En Cuenta, elige la opción Administrar tu plan.</li>
                <li>Revisa el enlace de contacto debajo de Pago.</li>
              </ol>
              <p>
                Puedes verificar o actualizar la información de tu pago en la página de tu cuenta, en Tu plan.
              </p>
            </div>
            
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto3(!mostrarTexto3)}
              variant="primary"
            >
              <span>
                {mostrarTexto3 ? (
                  <>
                    Problemas con la aplicacion?
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    Problemas con la aplicacion?
                    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto3 && (
              <div className="container fsp" style={{ animation: "slideIn 0.5s ease" }}>
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Spotify, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4">
            <Button
              onClick={() => setMostrarTexto4(!mostrarTexto4)}
              variant="primary"
            >
              <span>
                {mostrarTexto4 ? (
                  <>
                    Mi dispositivo dejo de funcionarㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    Mi dispositivo dejo de funcionarㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto4 && (
              <div className="container fsp" style={{ animation: "slideIn 0.5s ease" }}>
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Spotify, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
          <div className="container b1c mt-4 mb-5">
            <Button
              onClick={() => setMostrarTexto5(!mostrarTexto5)}
              variant="primary"
            >
              <span>
                {mostrarTexto5 ? (
                  <>
                    Mi cuenta esta comprometidaㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                ) : (
                  <>
                    Mi cuenta esta comprometidaㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </span>
            </Button>
            {/* Texto adicional que se mostrará u ocultará al hacer clic en el botón */}
            {mostrarTexto5 && (
              <div className="container fsp" style={{ animation: "slideIn 0.5s ease" }}>
                <h2 className="mb-4">¿Tienes problemas para acceder?</h2>
                <p>Si no recuerdas tu contraseña, puedes restablecerla.</p>
                <p>
                  Si no recuerdas tu email o tu nombre de usuario, ve a la
                  página para restablecer tu cuenta e ingresa direcciones de
                  email que tengas. Cuando ingreses una dirección que esté
                  registrada en Spotify, aparecerá un mensaje indicando que se
                  envió el email para restablecer la contraseña.
                </p>
                <p>
                  Importante: hay varias formas de registrarse, por ejemplo, con
                  el email, con el número de teléfono, con Facebook, con Apple o
                  con Google. Prueba iniciar sesión con todas estas opciones
                  para ver si encuentras la cuenta.
                </p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
