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
              <h4>Stats:</h4>
              
                    <p>Hp:</p>
                    <p>Attack:</p>
                    <p>deffense:</p>
                    <p>Special attack:</p>
                    <p>Special deffense:</p>
                    <p>Speed:</p>
            </ContainerItems>

            <ContainerItems>
                <h4>Moves</h4>
                            
                          <p>Move name 1 </p>
                         <p>Move name 2</p>        
            </ContainerItems>

            </ContainerDetails>
        </div>
    )
}

export default DetailsPage;