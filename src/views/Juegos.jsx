import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart/cartContext';
import '../css/juegosId.css';

const Juegos = () => {

  const { getGames, games } = useContext(GamesContext);
  const { addItemToCart, cartCount } = useContext(CartContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);
  

  const handleAdd = () => { if(cartCount < product.stock) addItemToCart(product[0])}
  useEffect(() => {
    console.log("Cantidad de elementos en el carrito:", cartCount);
  }, [cartCount]);

  useEffect(() => {
    console.log("Games from context:", games);
  }, [games]);

  useEffect(() => {
    console.log("Cart count from context:", cartCount);
  }, [cartCount]);


  useEffect(() => {
    const axiosGames = async () => {
      try {
        // Guardar los productos en el estado data
        const gamesData = await getGames();
        setData(gamesData);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    axiosGames();
  }, []);

  return (
    <Container className='justify-content-center mt-5'>
      <Container>
        <h1 className='text-left'>Nuestro Catálogo</h1>
      </Container>
      <Container className='d-flex justify-content-around mt-5'>
        <Row>
          {data.map((product) => (
            <Col key={product._id} className="mb-4">

              <Card className="custom-card mt-5" style={{ width: '18rem', height: '23rem' }} as={'div'}>
                <Link to={`/juegos/${product._id}`} className="card-link">
                  <Card.Img variant="top" src={product.img} alt="" />
                </Link>
                <Card.Body className="text-center custom-card-body">
                  <Card.Title>{product.nombre}</Card.Title>
                  <Card.Text>${product.precio}</Card.Text>
                  {product.stock === 0 ? (
                    <h4>sin stock</h4>
                  ) : (
                    <Button variant="primary" className="custom-button" onClick={() => handleAdd(product) }>
                      Agregar al carro
                    </Button>
                  )}
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Juegos;
