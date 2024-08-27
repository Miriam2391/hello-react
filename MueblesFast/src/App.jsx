import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CabeceraLogo from './componentes/CabeceraLogo'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import PiePagina from './componentes/PiePagina'



function App() {
  

  return (
    <>
       <CabeceraLogo/>
       <Banner />

       
        <br />
        <br />
        
        <Formulario />
      

    <PiePagina/>    

    </>
  )
}

export default App
