import { Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { GamesContext } from '../context/games/gamesContext'

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
      <div>
        {data.map((product) => (
          <div key={product._id}>
            <h1>{product.nombre}</h1>
            <img src={product.img} alt="" />
          </div>
        ))}
        <Button onClick={() => getGames()}>peticion</Button>
      </div>
    </>
  );
}

export default Juegos
