import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LoginRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        password: '',
    });

    const [message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault;

        try {
            const response = await axios.post('http://localhost:8080/users', formData);

            if (response.status === 200) {
                setMessage('Registro exitoso');
            } else {
                setMessage(response.data.message || 'Error en el registro');
            }
        } catch (error) {
            setMessage('Error en el registro');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrarse
            </Button>

            {message && <p>{message}</p>}
        </Form>
    );
};

export default LoginRegister;
