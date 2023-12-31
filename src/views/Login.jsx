import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import UserContext from '../context/games/user/UserContext';
import '../css/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false)
  const initialValues = {
    nombre:"",
    mail:"",
    password:""
  }

  const [user, setUser] = useState(initialValues)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación con el correo y la contraseña
    console.log('Email:', email);
    console.log('Password:', password);
    // Puedes agregar tu lógica de autenticación aquí (por ejemplo, enviar una solicitud a tu servidor)
  };

  return (
    <Container>
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <div className="form-container custom-form"> {/* Agrega las clases del estilo adicional */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
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

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Login;
