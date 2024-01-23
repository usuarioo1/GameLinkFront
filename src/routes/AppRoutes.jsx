import React from 'react';
import Home from '../views/Home';
import Juegos from '../views/Juegos';
import Soporte from '../views/Soporte';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Login from '../views/Login';
import LoginRegister from '../views/LoginRegister';
import JuegoId from '../views/JuegoId';
import Checkout from '../components/checkout/Checkout.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Layout />}> {/* esto reemplazar por el layout que tendra nav outlet y footer*/}
                <Route path='/' element={<Home />} />
                <Route path='juegos' element={<Juegos />} />

                <Route path='soporte' element={<Soporte />} />
                <Route path='login' element={<Login />} />
                <Route path='registrate' element={<LoginRegister />} />
                <Route path='juegos/:id' element={<JuegoId />} />

                <Route path='checkout' element={<Checkout />} />
                <Route path='*' element={<Navigate replace='/' />} />

            </Route>
        </Routes>
    )
}

export default AppRoutes
