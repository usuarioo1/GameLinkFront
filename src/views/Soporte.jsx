import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../css/soporte.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom';



const Soporte = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    mail: '',
    mensaje: ''
  });
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/sendmessage', formData);

      if (response.status === 200) {
        setMessage('Mensaje enviado correctamente');
      } else {
        setMessage(response.data.message || 'Error al procesar');
      }
    } catch (error) {
      setMessage('Error mensaje no enviado');
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "No se pudo enviar tu mensaje",
        //footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  const navigate = useNavigate()

  const showAlert = () => {
    Swal.fire({
      title: 'Mensaje enviado exitosamente',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        // Navegar a la página de inicio después de cerrar la alerta
        navigate('/'); // Cambia '/home' por la ruta a la que deseas redirigir
      }
    });
  };
  

  return (
    <Container>
      <div className="testbox">
        <form action="/" onSubmit={handleSubmit}>
          <p id="h1">Soporte</p>
          <p>
            A continuación ingresa tu solicitud o requerimiento, no es necesario que seas un usuario conectado ni estar registrado para usar este servicio
          </p>
          <p id="h4">Nombre</p>
          <input
            placeholder="tu nombre"
            type="text"
            className="input"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          <p id="h4">Email<span>*</span></p>
          <input
            placeholder="dejanos tu correo...👍"
            type="text"
            className="input"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
          />
          <p id="h4">¿Cómo fue tu experiencia comprando en la página?<span>*</span></p>
          <table>
            <tbody>
              <tr>
                <th className="first-col"></th>
                <th>Buenisima, la recominedo!</th>
                <th>Buena</th>
                <th>Podría mejorar</th>
              </tr>
              <tr>
                <td className="first-col">Professional</td>
                <td><input name="point#2" value="none" type="radio" /></td>
                <td><input name="point#2" value="none" type="radio" /></td>
                <td><input name="point#2" value="none" type="radio" /></td>
              </tr>
            </tbody>
          </table>
          <p id="h4">Indicanos tu problema: </p>
          <textarea
            rows="5"
            type="text"
            className="input"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
          ></textarea>
          <div className="btn-block">
            <button type="submit" onClick={showAlert}>Send Feedback</button>

            {message &&<p>{message}</p>}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Soporte;
