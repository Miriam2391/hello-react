import { Fragment } from "react";
import logo from '../imagenes/logo.avif'
import './Estilos.css'



function CabeceraLogo(){

    return(
    <>
        <div className="container">
            <header>
                <img src={logo} alt="logotipo" />
                <h1>MueblesFAST</h1>
            </header>
        </div>
    </>

);

}

export default CabeceraLogo;





