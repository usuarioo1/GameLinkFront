import React from 'react'
import NavBarMain from './NavBarMain'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <NavBarMain />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
