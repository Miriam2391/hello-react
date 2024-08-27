import { useState, useEffect } from 'react';
import './Estilos.css'


const Footer = () => {

    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
  
        return () => clearInterval(interval);
   }, []);


    return(
    <>
            <div className='pie' >
                <div className='texto'>
                <h1>MueblesFAST</h1>
                 </div> 

                 <div className='fechas'>
                    <h4>Fecha: {dateTime.toLocaleDateString()} </h4>
                    <h4>Hora:  {dateTime.toLocaleTimeString()}</h4>
                 </div>

            </div>

    </>

);

}

export default Footer;
