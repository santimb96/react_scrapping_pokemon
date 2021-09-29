import React, {useState} from "react";
import ObtenerPokemon from "./ObtenerPokemon.jsx";


const PreguntarPokemon = () => {

    const [nombre, setNombre] = useState("");
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [component, setComponent] = useState("");

    const handleChange = (event) => {
        setNuevoNombre(event.target.value);
    }

    const handleClick = () => {
        setNombre(nuevoNombre);
        console.log(nombre)
        setComponent(<ObtenerPokemon pokemon={nombre}/>);
    }

    return (
      <div>
          <p>Introduce un nombre o número</p>
          <input type="text" onChange={handleChange} value={nuevoNombre}/>
          <button onClick={handleClick}>Clica!</button>
          <div>{component}</div>
      </div>
    );
}

export default PreguntarPokemon;