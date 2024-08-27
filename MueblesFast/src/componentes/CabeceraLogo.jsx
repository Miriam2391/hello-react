
import { Fragment } from "react";

import logo from '../imagenes/logo.avif'
import facebook from '../imagenes/icons8-facebook-nuevo-48.png'
import instagram from '../imagenes/icons8-instagram-48.png'
import youtube from '../imagenes/icons8-youtube-48.png'
import './Estilos.css'


function CabeceraLogo(){

    

    return(
    <>
       <header className="cabecera">
      <a href="" className="cabecera_titulo"> 
        <div className="contenedor" id="container">
        <img src={logo} alt="logos" className="cabecera_img"/>
        </div> MueblesFAST </a>

        <div class="redes">          
            <img className="facebook" src={facebook} alt="facebook"/>
            <img className="instagram" src={instagram} alt="instagram"/>
            <img className="youtube" src={youtube} alt="youtube"/>
        </div>
    </header>
    </>

);

}

export default CabeceraLogo;





