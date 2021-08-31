import React, {useEffect, useState} from "react";

const ObtenerPokemon = (props) => {
    const{nombre} = props;
    let pokemon = nombre;

    const [name, setName] = useState(null);
    const [id, setId] = useState(null);
    const [sprites, setSprites] = useState(null);

    if(isNaN(pokemon)){
        pokemon = pokemon.toLowerCase();
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then(res => setters(res))
            .catch(e => console.log(e));

        function setters(res){
            setName(res.name.toUpperCase());
            setId(res.id);
            setSprites(res.sprites.front_default);
        }
    }, [pokemon]);

    return (
        <div>
            <li><img src={sprites} alt=""/></li>
            <li>{name}</li>
            <li>{id}</li>
        </div>
    )
}
export default ObtenerPokemon;


