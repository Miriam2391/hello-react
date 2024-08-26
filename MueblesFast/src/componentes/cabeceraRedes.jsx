import { Fragment } from 'react';
import facebook from '../imagenes/facebook.png'
import './Estilos.css'



function CabeceraRedes(){

    return(
    <>
        <div className="container">
            <header>
                <img src={facebook} alt="face" />
                
            </header>
        </div>
    </>

);

}

export default CabeceraRedes;
