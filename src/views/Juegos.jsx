import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { CartContext } from '../context/cart/cartContext';
import '../css/juegosId.css';
=======
import  CartContext  from '../context/cart/CartContext';
import '../css/juegosId.css';




>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38

const Juegos = () => {

  const { getGames, games } = useContext(GamesContext);
  const { addItemToCart, cartCount } = useContext(CartContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);
<<<<<<< HEAD
  

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
=======
  const { getGameById, game } = useContext(GamesContext)
  const { addItemToCart, cartCount } = useContext(CartContext)
  console.log(addItemToCart, cartCount)


  const handleAdd = (event) => 
  { event.preventDefault(); 
    if ( cartCount < data[0].stock){addItemToCart(data[0])} else {
      console.log(cartCount);
    } 
  //! SE DEBE OBTENER DE FORMA DINAMICA EL ID DE PRODUCTO PARA CARGARLO EN PRODUCTOS LINEA 24 (DATA[0]) ** CORREGIR
  }
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38


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
<<<<<<< HEAD
=======

>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
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
<<<<<<< HEAD
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

=======
                  <Card.Body className="text-center custom-card-body">
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>${product.precio}</Card.Text>
                    <Button variant="primary" className="custom-button" onClick={handleAdd}>Agregar al carro</Button>
                  </Card.Body>
                </Card>
              </Link>
>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
            </Col>
          ))}
        </Row>
      </Container>
<<<<<<< HEAD
=======

>>>>>>> 1b8b52e5d3d9e3b266fa39955d93fbbb66a3ee38
    </Container>
  );
};

export default Juegos;
