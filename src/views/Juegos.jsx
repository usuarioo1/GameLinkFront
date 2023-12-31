import { Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { GamesContext } from '../context/games/gamesContext'
import JuegoId from './JuegoId'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Juegos = () => {
  const { getGames, games } = useContext(GamesContext)

  // Declarar el estado antes de su uso
  const [data, setData] = useState([])

  useEffect(() => {
    const axiosGames = async () => {
      try {
        // Guardar los productos en el estado data
        const games = await getGames();
        setData(games);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }
    axiosGames();
  }, []);

  return (
    <>
      <Link to={`/product/`}>
        <Card>
          {data.map((product) => (
            <Card.Body key={product._id}>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Img variant="top" src={product.img} alt="" />
            </Card.Body>
          ))}
          <Card.Footer>
            <Button onClick={() => getGames()}>Peticion</Button>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

export default Juegos
