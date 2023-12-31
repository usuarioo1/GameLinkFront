import axios from 'axios'
import { GamesContext } from './gamesContext'
import { useReducer } from 'react'
import gameReducer from './GamesReducer'
import axiosClient from '../../config/axiosClient'


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
            const response = await axiosClient.get(`/products/${id}`)
            const gameInfo = response.data.product

            dispatch({
                type:"GET_PRODUCT",
                payload: gameInfo
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <GamesContext.Provider value={{getGames,getGameById, products: gamesState.product }}>{children}</GamesContext.Provider>
        </div>
    )
    }

