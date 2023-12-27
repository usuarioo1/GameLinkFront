import axios from 'axios'
import { GamesContext } from './gamesContext'
import { useState } from 'react'


export const GamesProvider = ({ children }) => {
    
    const getGames = async () => {
        const response = await axios.get('http://localhost:8080/games')
        const games = response.data.info
        console.log(games)
        return games
    }
        

    return (
        <div>
            <GamesContext.Provider value={{getGames}}>{children}</GamesContext.Provider>
        </div>
    )
    }

