import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { GamesContext } from '../context/games/gamesContext'

const Juegos = () => {

  const {getGames,games} = useContext(GamesContext)
  const[product, setProducts] = useState([])

  useEffect(()=>{
      const axiosGames = async() =>{
        setProducts(await getGames())
      }
      axiosGames()
  },[])

  const [data, setData] = useState([])


  return (
    <>
      <div>
        {product.map((product)=>(
            <div key={product._id}>
              <h1>{product.nombre}</h1>
            </div>
        ))

        }
        <Button onClick={() => games()}>peticion</Button>
      </div>
    </>
  );
        }

export default Juegos
