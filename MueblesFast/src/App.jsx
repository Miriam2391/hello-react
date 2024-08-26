import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CabeceraLogo from './componentes/CabeceraLogo'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import PiePagina from './componentes/PiePagina'



function App() {
  

  return (
    <>
       <CabeceraLogo />
       <Banner />

     <div className="container container-fluid">
        <br />
        <br />
        <h1>Ingreso de Datos</h1>
        <Formulario />

      </div>

    <PiePagina />    

    </>
  );
}

export default App
