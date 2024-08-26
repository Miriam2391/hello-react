import { useState } from 'react'
import CabeceraLogo from './componentes/CabeceraLogo'
import CabeceraRedes from './componentes/cabeceraRedes'
import PiePagina from './componentes/PiePagina'
import Formulario from './componentes/Formulario'


function App() {
  

  return (
    <>
    <CabeceraLogo />

    <CabeceraRedes />
      
    <PiePagina/>  
    
    <Formulario/>

    </>
  )
}

export default App
