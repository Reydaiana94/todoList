import React, { useState } from 'react';
import TareaForm from './componentes/TareasForm';
import Tarea from './componentes/Tarea';
import './normalize.css';
import './App.css';

function App() {
   const [listaTareas, setListaTareas] = useState([]);
   const nuevaTarea = (tarea) =>{
    setListaTareas([tarea, ...listaTareas])
   }

  const borrar = (id) =>{
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  }

  return (
    <div className= "contenedor">
      <div className="App">
        <div className = "paper">
          <div className = "pattern">
            <TareaForm nuevaTarea = {nuevaTarea}/>
            <div className = "lista">
            {
              listaTareas.map((e, index)=> <Tarea 
              tarea = {e}
              borrar = {borrar}
              id= {index}                             
              />
              )
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
