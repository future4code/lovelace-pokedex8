import React, { useContext, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "../../global/GlobalContext";
import useRequestData from "../../hooks/useRequestData";

const ContainerDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`
const Cabecalho = styled.section`
    display: flex;
    justify-content:space-between;
    height: 40px;
    padding: 40px;
    align-items: center;
`
const ContainerItems = styled.section`
    border: 2px solid #000;
    width: 30%;
    display: flex;
    flex-direction: column;
    

`
const ImagePoke = styled.img`
    width: 200px;
    height: 200px;
`


function DetailsPage () {
    const {state, setters, requests} = useContext(GlobalContext)
    const history = useHistory()
    //ter acesso ao parametro que está na url, usando o hook useParams
    const params = useParams()
    
    //batendo na API de detalhes do pokemon e incluindo o parametro "nome"
    const pokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${params.nome}`, {})

    const pokemonAbility = useRequestData(`https://pokeapi.co/api/v2/ability/${pokemon.id}`, {})

    console.log(pokemon)
    

    const goToHome = () => {
        history.push("/")
    }
    return(
        <div>
            <Cabecalho>
                <button onClick = {(()=> goToHome())}>Voltar para home</button>
                
                {pokemon.name && <h1> {pokemon.name} </h1>} 

                <button>Adicionar/Remover da pokedex</button>
            </Cabecalho>

            <ContainerDetails>
                    <section>
                        {pokemon.sprites && pokemon.sprites.front_default && <ImagePoke src = {pokemon.sprites.front_default}/> }
                    </section>

                    <section>
                        {pokemon.sprites && pokemon.sprites.back_default && <ImagePoke src = {pokemon.sprites.back_default}/> }
                    </section>
            <ContainerItems>
              <h2>Stats:</h2>
              
                    <p>Id: <b>{pokemon.id}</b></p>
                    <p>Type 1: <b>{pokemon.types && pokemon.types[0].type.name}</b></p>
                    <p>Type 2: <b>{pokemon.types &&pokemon.types[1].type.name}</b></p>
                    <p>Hp: <b>{pokemon.stats && pokemon.stats[0].stat.url}</b></p>
                    <p>Attack: <b>{pokemon.stats && pokemon.stats[1].stat.url}</b></p>
                    <p>Deffense: <b>{pokemon.stats && pokemon.stats[2].stat.url}</b></p>
                    <p>Special attack: <b>{pokemon.stats && pokemon.stats[3].stat.url}</b></p>
                    <p>Special deffense: <b>{pokemon.stats && pokemon.stats[4].stat.url}</b></p>
                    <p>Speed: <b>{pokemon.stats && pokemon.stats[5].stat.url}</b></p>
            </ContainerItems>

            <ContainerItems>
                <h2>Moves</h2>
                            
                          <p><b>{pokemon.moves && pokemon.moves[0].move.name}</b></p>
                         <p><b>{pokemon.moves && pokemon.moves[1].move.name}</b></p>        
            </ContainerItems>

            </ContainerDetails>
        </div>
    )
}

export default DetailsPage;