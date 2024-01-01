// JuegoId.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../config/axiosClient';

const JuegoId = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    const fetchJuegoDetails = async () => {
      try {
        // Hacer una solicitud al backend para obtener detalles del juego por ID utilizando Axios
        const response = await axiosClient.get(`/games/${id}`);
        
        // Almacenar los detalles del juego en el estado
        setJuego(response.data.product);
      } catch (error) {
        console.error("Error fetching juego details:", error);
      }
    };

    fetchJuegoDetails();
  }, [id]);

  return (
    <div>
      {juego ? (
        <>
          <h2>Detalles del juego con ID: {id}</h2>
          <img src={juego.img} alt={juego.nombre} />
          <p>Nombre: {juego.nombre}</p>
          <p>Descripción: {juego.descripcion}</p>
          <p>Precio: {juego.precio}</p>
          {/* Mostrar otros detalles según sea necesario */}
        </>
      ) : (
        <p>Cargando detalles del juego...</p>
      )}
    </div>
  );
};

export default JuegoId;
