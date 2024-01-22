// Importa las bibliotecas necesarias
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Soporte from '../views/Soporte';

// Define el componente Footer
const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Tienda Online</p>
            <Link to={'/soporte'}>
            <p>Soportte</p>
            </Link>
          </Col>
          <Col md={6}>
            <h5>Enlaces Útiles</h5>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
          <p>Todos los derechos reservados &copy; 2024 GameLink | Marca Registrada &reg;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
