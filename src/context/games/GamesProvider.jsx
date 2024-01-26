
import { GamesContext } from './GamesContext'
import { useReducer } from 'react'
import gameReducer from './gamesReducer'
import axiosClient from '../../config/axiosClient'


export const GamesProvider = ({ children }) => {

    const initialState = {
        products:[],
        product:[{
            id:"",
            nombre:"",
            precio:0,
            img:"",
            descripcion:"",
            stock:"",

        }]
    }

    const [gamesState, dispatch] = useReducer(gameReducer,initialState)
    
    const getGames = async () => {
        const response = await axiosClient.get('/games')
        const games = response.data.info
        dispatch({
            type: "GET_GAMES",
            payload: games
        })
        console.log(games)
        return games
    }
        
    const getGameById = async(id) =>{
        try {
            const response = await axiosClient.get(`/games/${id}`)
            const gameInfo = response.data.product

            dispatch({
                type:"GET_PRODUCT",
                payload: gameInfo
            })
        } catch (error) {
            console.error(error)
        }
    }

    const reduceStock = async(cartItems) => {

        const productos = {cartItems}
        const result = await axiosClient.put('/reduceStock', productos)
        console.log(result)
    }

    return (
        <div>
            <GamesContext.Provider value={{getGames,getGameById, products: gamesState.products, reduceStock }}>{children}</GamesContext.Provider>
        </div>
    )
    }

