import React, { useState } from "react";
import TareaForm from "./componentes/TareasForm";
import Tarea from "./componentes/Tarea";
import "./normalize.css";
import "./App.css";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const repeated = (tarea) => {
    return listaTareas.includes(tarea)
  };

  const nuevaTarea = (tarea) => {
    if (listaTareas.length === 0 ) {
      setListaTareas([tarea, ...listaTareas]);
    } else {
       if (!repeated(tarea)) {
        setListaTareas([tarea, ...listaTareas]);
      }
    }
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  return (
    <div className="contenedor">
      <div className="App">
        <div className="paper">
          <div className="pattern">
            <TareaForm nuevaTarea={nuevaTarea} array={listaTareas} />
            <div className="lista">
              {listaTareas.map((e, index) => (
                <Tarea tarea={e} borrar={borrar} id={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
