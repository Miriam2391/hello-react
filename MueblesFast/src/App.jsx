import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CabeceraLogo from './componentes/CabeceraLogo'
import CabeceraRedes from './componentes/cabeceraRedes'
import PiePagina from './componentes/PiePagina'
import Formulario from './componentes/Formulario'
import Banner from './componentes/Banner'

function App() {
  

  return (
    <>
       <CabeceraLogo />
       <CabeceraRedes />
       <Banner />

     <div className="container container-fluid">
        <br />
        <br />
        <h1>Ingreso de Datos</h1>
        <Formulario />
      </div>

   
      
    <PiePagina />  


   

    </>
  )
}

export default App
