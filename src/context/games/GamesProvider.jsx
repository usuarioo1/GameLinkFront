import axios from 'axios'
import { GamesContext } from './gamesContext'
import { useReducer } from 'react'
import gameReducer from './GamesReducer'


export const GamesProvider = ({ children }) => {

    const initialState = {
        products:[],
        product:[{
            id:"",
            nombre:0,
            precio:"",
            img:"",
            descripcion:"",
            stock:"",

        }]
    }

    const [gamesState, dispatch] = useReducer(gameReducer,initialState)
    
    const getGames = async () => {
        const response = await axios.get('http://localhost:8080/games')
        const games = response.data.info
        dispatch({
            type: "GET_GAMES",
            payload: games
        })
        console.log(games)
        return games
    }
        

    return (
        <div>
            <GamesContext.Provider value={{getGames, products: gamesState.product }}>{children}</GamesContext.Provider>
        </div>
    )
    }

