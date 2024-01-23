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
            <h5   className='contact'>Información de Contacto <i class="bi bi-info-circle-fill"></i></h5>
            <p>Teléfono <i class="bi bi-telephone-fill"></i> - +56 9861 5487</p>
            <p>Correo <i class="bi bi-envelope-at-fill"></i> - contacto@gamelink.com</p>
            
          </Col>
          <Col md={6}>
            <h5 className='contact'>Enlaces Útiles <i class="bi bi-hand-index-fill"></i></h5>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Noticias</a></li>
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
