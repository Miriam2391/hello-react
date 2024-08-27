import { Fragment, useState } from "react";
import { Button, Form } from 'react-bootstrap';



const Formulario = () => {
    const [ nombre, setNombre ] = useState('');
    const [ apellidos, setApellidos ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ lugar, setLugar ] = useState('');
    const [ errors, setErrors] = useState({});

    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if(!apellidos) newErrors.apellidos = 'Los apellidos son obligatorio';
        if(!celular) newErrors.celular = 'El celular es obligatorio';
        if(!lugar) newErrors.lugar = 'El Lugar es obligatorio';
        setErrors(newErrors);
        
        alert(`Datos ingresados: { ${nombre}, ${apellidos}, ${celular}, ${lugar} }`);
    }

    const cambioNombre = (e)=> setNombre(e.target.value);
    const cambioApellido = (e)=> setApellidos(e.target.value);
    const cambioCelular = (e) => setCelular(e.target.value);
    const cambioLugar = (e) => setLugar(e.target.value);


    return (
        <>
        <div className="formul">
            <Form onSubmit={realizarEnvio}>
                    <Form.Group>
                <div className="primero">
                    <div className="Name">
                    <label htmlFor="">First Name</label>  
                    <Form.Control type="text" value={nombre} onChange={cambioNombre}   placeholder="Ingrese nombre"></Form.Control>      
                    </div> 

                    <div className="textname">
                    <label htmlFor="">Last Name</label> 
                    <Form.Control type="text" value={apellidos} onChange={cambioApellido} placeholder="Ingrese apellidos"></Form.Control>
                    </div>     
                </div>
                    <br />
                    <label htmlFor="">Email Address</label>   
                    <Form.Control type="text" value={celular}  onChange={cambioCelular} placeholder="Ingrese celular"></Form.Control>
                    <br/>
                    <label htmlFor="">Phone Number</label>   
                    <Form.Control type="text"  value={lugar}  onChange={cambioLugar} placeholder="Ingrese lugar de procedencia"></Form.Control>
            
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" >Submit</Button>
            </Form>
        </div>
        </>
    );
}

export default Formulario;