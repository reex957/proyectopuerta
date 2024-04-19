import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';
import '../styles/styles.css';

export default function Navigation() {
    const { isLogged, logout, hasRole } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: '#027fdb' }}>
            <Image src='/images/logo.png' width={'4.5%'} />
            <Navbar.Brand as={NavLink} to={routes.home} style={{ color: '#fbfbfb' }} className='ms-5'>
                𝗣𝗹𝗮𝗻𝘁𝗲𝗰𝗵
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mx-auto custom-nav-links Necessary">
                    <Nav.Link as={NavLink} to={routes.catalogo} className="ola mx-2">PRODUCTOS</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.quienesSomos} className="ola mx-2">QUIENES SOMOS</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.faq} className="ola mx-2">FAQ</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.contacto} className="ola mx-2">CONTACTO</Nav.Link>
                    {
                        hasRole('admin') ? (
                            <NavDropdown title='ADMIN'>
                                <NavDropdown.Item as={NavLink} to={routes.usuariosA}>Usuarios</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={routes.productsA}>Productos</NavDropdown.Item>
                            </NavDropdown>
                        ) : hasRole('usuario') ? (
                            <NavDropdown title='USER'>
                                <NavDropdown.Item as={NavLink} to={routes.iotU + routes.iotDashboardU}>IoT</NavDropdown.Item>
                            </NavDropdown>
                        ) : (<></>)
                    }

                </Nav>
                <Nav className='me-4'>
                    {isLogged() ? (<>
                        <Nav.Link as={NavLink} to={routes.perfil} className="ola mx-2">
                            MI PERFIL
                        </Nav.Link>
                        <Nav.Link onClick={() => logout()} className="ola mx-2">
                            CERRAR SESIÓN
                        </Nav.Link>
                    </>
                    ) : (
                            <>
                                <Nav.Link as={NavLink} to={routes.login} className="ola mx-2">
                                    LOGIN
                            </Nav.Link>
                                <Nav.Link as={NavLink} to={routes.registro} className="ola mx-2">
                                    REGISTRO
                            </Nav.Link>
                            </>
                        )}
                </Nav>


            </Navbar.Collapse>
        </Navbar>
    )
}
