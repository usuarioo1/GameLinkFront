import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import React from 'react'
import Home from './components/Home';
import Figuras from './components/Figuras';
import Juegos from './components/Juegos';
import Ofertas from './components/Ofertas';
import Soporte from './components/Soporte';
import NavBarMain from './layouts/NavBarMain';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<NavBarMain />}>
            <Route path='/' element={<Home />} />
            <Route path='juegos' element={<Juegos />} />
            <Route path='figuras' element={<Figuras />} />
            <Route path='ofertas' element={<Ofertas />} />
            <Route path='soporte' element={<Soporte />} />
            <Route path='*' element={<Navigate replace = '/' />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;





