// JuegoId.js
import { useEffect, useState, useContext } from 'react'; // Importa useContext
import { useParams } from 'react-router-dom';
import axiosClient from '../config/axiosClient';
import '../css/juegoId.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Box, Paper } from '@mui/material';
import CartContext from '../context/cart/CartContext'; // Importa CartContext para las funcinoalidades del carrtio del componente juegos
import Swal from 'sweetalert2';

const JuegoId = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  // Usa el contexto del carrito
  const { addItemToCart, cartCount } = useContext(CartContext);

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

  const handleAdd = (product) => {
    if (cartCount < product.stock) {
      addItemToCart(product);
      showSuccessToast(); // Llama a showSuccessToast después de agregar al carrito
    }
  };

  const showSuccessToast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-start",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Toast.fire({
      icon: "success",
      title: "Agregado al carrito"
    });
  };

  return (
    <div>
      {juego ? (
        <>
          <Container>
            <Paper>
              <Box>
                <Container className='mt-5'>
                  <Row>
                    <Col md={6}>
                      <Image src={juego.img} fluid />
                    </Col>
                    <Col md={6}>
                      <h2 className='mt-5'>{juego.nombre}</h2>
                      <h5 className="description mt-5 ">{juego.descripcion}</h5>
                      <h3 className="price mt-5">${juego.precio}</h3>
                      <h4 className='stock mt-5' >Stock:{juego.stock}</h4>
                      {juego.stock === 0 ? (
                        <h4>sin stock</h4>
                      ) : (
                        <Button 
                          className='mt-5 buttonCart' 
                          variant="primary"
                          onClick={() => handleAdd(juego)} // Agrega el producto al carrito al hacer clic
                        >
                          Agregar al Carrito
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Box>
            </Paper>
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

//bajar contenido

// cambiar colores
// -acciones handleadd
// -adecuar colores a la pagina

