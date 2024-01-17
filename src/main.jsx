import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//providers
import { GamesProvider } from './context/games/GamesProvider.jsx'
import { FunkoProvider } from './context/funkoPops/FunkoProvider.jsx'
import  CartProvider  from './context/cart/CartProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <GamesProvider>
        <FunkoProvider>
          <CartProvider>
          <App />
          </CartProvider>
        </FunkoProvider>
      </GamesProvider>

    </BrowserRouter>


  </React.StrictMode>,
)
