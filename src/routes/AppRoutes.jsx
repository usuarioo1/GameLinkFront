import React from 'react';
import Home from '../views/Home';
import Juegos from '../views/Juegos';
import Figuras from '../views/Figuras';
import Ofertas from '../views/Ofertas';
import Soporte from '../views/Soporte';
import { Routes,Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Layout />}> // esto reemplazar por el layout que tendra nav outlet y footer
                <Route path='/' element={<Home />} />
                <Route path='juegos' element={<Juegos />} />
                <Route path='figuras' element={<Figuras />} />
                <Route path='ofertas' element={<Ofertas />} />
                <Route path='soporte' element={<Soporte />} />
                <Route path='*' element={<Navigate replace='/' />} />

            </Route>
        </Routes>
    )
}

export default AppRoutes
