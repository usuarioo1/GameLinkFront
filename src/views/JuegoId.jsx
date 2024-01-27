// JuegoId.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../config/axiosClient';
import '../css/juegoId.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


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
          <Container>
            <Row>
              <Col md={6}>
                <Image src={juego.img} fluid />
              </Col>
              <Col md={6}>
                <h2>{juego.nombre}</h2>
                <p className="description">{juego.descripcion}gdfdg</p>
                <p className="price">${juego.precio}</p>
                <Button variant="primary">Agregar al Carrito</Button>
              </Col>
            </Row>
          </Container>

        </>
      ) : (
        <p>Cargando detalles del juego...</p>
      )}
    </div>
  );
};

export default JuegoId;

// import React from 'react';
// import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// const ProductDetailPage = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={6}>
//           <Image src={juego.img} fluid />
//         </Col>
//         <Col md={6}>
//           <h2>{juego.nombre}</h2>
//           <p className="description">{juego.descripcion}</p>
//           <p className="price">${juego.precio}</p>
//           <Button variant="primary">Agregar al Carrito</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductDetailPage;



