import {useState} from "react";

const ObtenerPokemon = (props) => {

    const [nombre, setNombre] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState("");

    const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`;

    async function obtener(url){
        const respuesta = await fetch(url);
        const json = await respuesta.json();

        setNombre(json.name);
        setImg(json.sprites.front_shiny);
        setId(json.id);
    }
    obtener(url).catch(e => {console.error(e)});


    return (
        <div>
            <p><img src={img} alt={nombre}/></p>
            <p>{nombre}</p>
            <p>{id}</p>
        </div>
    )
}
export default ObtenerPokemon;


