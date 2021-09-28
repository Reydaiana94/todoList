import React, { useState  } from 'react';

const Tarea = (props) => {
    const [checked, setChecked] = useState();
    const myclass = 'pristine';

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return(
        <div className= "tarea" >
            <input 
                type = "checkbox" 
                defaultChecked = {false}
                className=  {"cb " + (checked ? myclass : '')}
                onChange={() => {setChecked(!checked)}} 
            /> 
            <span>{props.tarea}</span> 
            <span onClick ={borrarTarea}>
                <i className="far fa-trash-alt"></i>
            </span>
        </div>
    )
}

export default Tarea;