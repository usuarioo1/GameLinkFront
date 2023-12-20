// Importa las bibliotecas necesarias
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Define el componente Footer
const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de Contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Email: info@example.com</p>
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
            <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Exporta el componente Footer
export default Footer;
