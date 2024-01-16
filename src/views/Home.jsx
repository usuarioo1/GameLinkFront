import React from 'react'
import CarruselGm from '../components/CarruselGm.jsx'
import Banner2 from '../components/Banner2.jsx'
import LoMasVendido from '../components/LoMasVendido.jsx'
import News from '../components/News.jsx'

const Home = () => {
  const estiloLmv = {
    backgroundColor: '#f0f0f0',
    paddingBottom:'90px',
    paddingTop:'60px'
  }
  return (
    <div>
      <CarruselGm />
      <LoMasVendido estilos={ estiloLmv}/>
      <Banner2 />
      <News />
    </div>
  )
}

export default Home
