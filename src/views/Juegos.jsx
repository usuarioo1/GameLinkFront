import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';
import '../css/juegosId.css'


const Juegos = () => {
  const { getGames, games } = useContext(GamesContext);

  // Declarar el estado antes de su uso
  const [data, setData] = useState([]);

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
                    <Button variant="primary" className="custom-button">Agregar al carro</Button>
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
