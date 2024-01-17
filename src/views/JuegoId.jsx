// JuegoId.js
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../config/axiosClient';
import '../css/juegoId.css'

const JuegoId = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    const fetchJuegoDetails = async () => {
      try {
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
        <div className="card2">
          <h2>{juego.nombre}</h2>
          <img src={juego.img} alt={juego.nombre} />
          <p className="description">{juego.descripcion}</p>
          <p className="price">${juego.precio}</p>
          {/* Mostrar otros detalles según sea necesario */}
          </div>
          
        </>
      ) : (
        <p>Cargando detalles del juego...</p>
      )}
    </div>
  );
};

export default JuegoId;
