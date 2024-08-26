import { Fragment } from "react";
import mueble1 from '../imagenes/mueble1.webp'
import './Estilos.css'



function Banner(){

    return(
    <>
        <div className="container">
            <header className="banner">
                <img src={mueble1} alt="logotipo" />

            </header>
        </div>
    </>

);

}

export default Banner;





