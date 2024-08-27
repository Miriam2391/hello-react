import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import './Estilos.css';




import img0 from '../imagenes/mueble1.webp';
import img1 from '../imagenes/mueble2.webp';
import img2 from '../imagenes/mueble3.webp';
import img3 from '../imagenes/mueble4.webp';
import img4 from '../imagenes/mueble5.webp';
import img5 from '../imagenes/mueble6.webp';

const paisajes = [img0, img1, img2, img3, img4, img5];


const Banner = () => 
{

  const [c, setC] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setC((prevC) => (prevC + 1) % paisajes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <div className='contenedor'>
        <img id="paisaje" src={paisajes[c]} className="imagen"/>
        
      </div>
      
    </>
    
  );
};

export default Banner;
