import React, { useState } from 'react';
import { Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Login = ({ onLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSuccess = (userData) => {
    // Lógica para manejar el inicio de sesión en tu aplicación
    console.log('Usuario ha iniciado sesión:', userData);

    // Llama al callback proporcionado por el componente padre
    onLogin(userData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        mail,
        password,
      });

      if (response.status === 200) {
        // Llama directamente a la función de inicio de sesión exitosa
        handleLoginSuccess(response.data.user);
      } else {
        console.error('Error en la autenticación:', response.data.message);
      }
    } catch (error) {
      console.error('Error en la autenticación:', error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <div className="form-container custom-form">
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={mail}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Container className="d-flex flex-column align-items-center">
                <Button variant="dark" type="submit" className="mt-3 mb-3">
                  Iniciar Sesión
                </Button>
                
                <Card.Title>No tienes cuenta?, registrate!</Card.Title>

                <Link to={'/registrate'} >
                  <Button variant="secondary" type="submit" className="mt-3">
                    Registrate
                  </Button>
                </Link>
              </Container>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
