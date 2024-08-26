import { Fragment } from "react";
import logo from '../imagenes/logo.avif'
import facebook from '../imagenes/facebook.png'



function cabeceraLogo(){

    return(
    <>

        <header className="barra">

            <img src={logo} alt={nombre}/>
            <p><strong>MuebesFAST</strong></p> 
            <img src={facebook} alt="" />
        
        </header>
    </>

);

}

export default cabeceraLogo;





