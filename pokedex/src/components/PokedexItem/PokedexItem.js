import React, { useContext } from "react"
import GlobalContext from "../../global/GlobalContext";
import PokeCard from "../PokeCard/PokeCard";


function PokedexItem(props) {
    const { state, setters, requests } = useContext(GlobalContext);
    return(
        <PokeCard>
            <p>Nome do pokemon </p>
            <img />
            <button onClick={() => setters.removePokeFromPokedex(props.item)}>Remover da pokedex</button>
            <button>Detalhes</button>
            
        </PokeCard>
    )
}

export default PokedexItem;