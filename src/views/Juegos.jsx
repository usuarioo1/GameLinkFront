import { Button, Card } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { GamesContext } from '../context/games/gamesContext';
import { Link } from 'react-router-dom';

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
    <>
      {data.map((product) => (
        <Link to={`/juegos/${product._id}`} key={product._id}>
          <Card key={product._id}>
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Img variant="top" src={product.img} alt="" />
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => getGames()}>Peticion</Button>
            </Card.Footer>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default Juegos;
