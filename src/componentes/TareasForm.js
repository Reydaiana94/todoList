import React, { useState } from "react";

const TareasForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);
  const manejoForm = (event) => {
    setInputText(event.target.value);
  };

  const enviar = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  return (
    <div className="conteiner">
      <form className="formTask" onSubmit={enviar}>
        <h1 className="title">Things to do</h1>
        <input className="entrada"
          value={inputText}
          onChange={manejoForm}
          placeholder="Add a task"
        />
        <button className="add">+</button>
      </form>
      {!validacion && <div className="validacion">Please add a task</div>}
    </div>
  );
};
export default TareasForm;
