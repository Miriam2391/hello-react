import { Fragment } from "react";
import logo from '../imagenes/logo.avif'
import facebook from '../imagenes/icons8-facebook-nuevo-48.png'
import instagram from '../imagenes/icons8-instagram-48.png'
import youtube from '../imagenes/icons8-youtube-48.png'
import  './Estilos.css'



const container=document.getElementById("contenedorlogo");
const cabecera_img=document.querySelector("img");

container.addEventListener("mousemove",(e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);

    cabecera_img.style.transformOrigin=`${x}px ${y}px`;
    cabecera_img.style.transform="scale(2)"
})

container.addEventListener("mouseleave", () => {
    cabecera_img.style.transformOrigin="center";
    cabecera_img.style.transform="scale(1)";
})



function CabeceraLogo(){

    return(
    <>
        <header className="cabecera">
            <a href="" className="cabecera_titulo"> 
                <div id="contenedorlogo">
                <img src={logo} alt="logo" className="cabecera_img"/>
                </div> MueblesFAST </a>

        <div className="redes">
            <img className="facebook" src={facebook} alt="facebook" />
            <img className="instagram" src={instagram} alt="instagram"/>
            <img className="youtube" src={youtube} alt="youtube"/>
        </div>
    </header>
       
    </>

);

}

export default CabeceraLogo;





