import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Banner from './components/Banner'
import CarroselAnimes from './components/CarroselAnimes'
import FreeToWatchCarrousel from './components/FreeToWatchCarrousel'
import MetalRogue from '../src/components/MetalRogue'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <CarroselAnimes />
    <FreeToWatchCarrousel  />
    <MetalRogue />
  </React.StrictMode>,
)
