import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';
import  CartContext  from '../context/cart/CartContext';
import '../css/juegosId.css';





const Juegos = () => {
  const { getGames, games } = useContext(GamesContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);
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
                    <Button variant="primary" className="custom-button" onClick={handleAdd}>Agregar al carro</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

    </Container>
  );
};

export default Juegos;
