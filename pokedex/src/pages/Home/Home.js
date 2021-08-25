import React from "react"
import PokeCard from "../../components/PokeCard/PokeCard";
import { useHistory } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import styled from "styled-components";
import { goToDetailPage } from "../../router/coodinator";
import { goToPokedex } from "../../router/coodinator";

const CardPokemonList = styled.ul`
    border: 2px solid #000;
    width:30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    
`
const Pokemon = styled.section`
  display: flex;
  column-gap: 50px;
  justify-content: space-between;
  background-color: transparent;
`

function Home () {
  
  //usando o hook requestData para bater na API
  const pokemonsList = useRequestData("https://pokeapi.co/api/v2/pokemon", [])

  const history = useHistory()

  const goToPokedex = () => {
    history.push("/Pokedex")
}

  const goToDetailPage = (name) => {
    history.push(`/details/${name}`)
  }

  //transformando o array de strings em array de componentes para serem mostrados na tela:
  // verificando se existe o results primeiro, caso exista, faz-se o map
  const pokemonsComponents = pokemonsList.results && pokemonsList.results.map((poke)=>{
    return <CardPokemonList key = {poke.name}> 
      <h2> {poke.name} </h2> 
      <Pokemon>
      
      <button onClick = {(()=>goToDetailPage(poke.name))} > Ver detalhes </button>
         
      <button>Adicionar à pokedex</button>
      
      </Pokemon>
      </CardPokemonList>
    
  })


  

  return(
      <div>
        
          <h1>HOME</h1>
          
          
          <button onClick = {() => goToPokedex()}>Ver minha Pokedex</button>
          {pokemonsComponents}
          
      </div>
  )
}


export default Home;