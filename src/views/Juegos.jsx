import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart/cartContext';
import '../css/juegosId.css'




const Juegos = () => {
  const { getGames, games } = useContext(GamesContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);
  const { getGameById, game } = useContext(GamesContext)
  const { addItemToCart, cartCount } = useContext(CartContext)

  const handleAdd = () => { if (cartCount < stock) addItemToCart(game[0]) }

  //const {nombre, stock, valor, img, descripcion} = product[0]

  useEffect(() => {
    const axiosGames = async () => {
      try {
        // Guardar los productos en el estado data
        const games = await getGames();
        setData(games);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    axiosGames();
  }, []);

  return (
<<<<<<< HEAD
    <Container className='d-flex justify-content-around mt-5'>
      <Row>
        {data.map((product) => (
          <Col key={product._id} className="mb-4">
            <Link to={`/juegos/${product._id}`} className="card-link">
              <Card className="custom-card mt-5" style={{ width: '18rem', height: '23rem' }} as={'div'}>
                <Card.Img variant="top" src={product.img} alt="" />
                <Card.Body className="text-center custom-card-body">
                  <Card.Title>{product.nombre}</Card.Title>
                  <Card.Text>${product.precio}</Card.Text>
                  {product.stock === 0 ? (<h4>sin stock</h4>) : (<Button variant="primary" className="custom-button" onClick={handleAdd}>Agregar al carro</Button>)}

                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
=======

    <Container className='justify-content-center mt-5'>
      <Container>
        <h1 className='text-left'>Nuestro Catálogo</h1>
      </Container>
      <Container className='d-flex justify-content-around mt-5'>
        <Row>
          {data.map((product) => (
            <Col key={product._id} className="mb-4">
              <Link to={`/juegos/${product._id}`} className="card-link">
                <Card className="custom-card mt-5" style={{ width: '18rem', height: '23rem' }} as={'div'}>
                  <Card.Img variant="top" src={product.img} alt="" />
                  <Card.Body className="text-center custom-card-body">
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>${product.precio}</Card.Text>
                    <Button variant="primary" className="custom-button">Agregar al carro</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

>>>>>>> 170ea41935dfb594453dc9e59742e4698d3a0b1c
    </Container>
  );
};

export default Juegos;
