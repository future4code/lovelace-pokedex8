import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    
    const [pokedex, setPokedex] = useState ([])
    
    const addToPokedex = (pokemon) => {

        const newPokedex = [...pokedex, pokemon]
            setPokedex(newPokedex)
       
        };
      
    console.log(pokedex)

    const removePokeFromPokedex = (pokemon) => {
             
         
        };
    

    const state = {pokedex, }
    const setters = {addToPokedex, removePokeFromPokedex}
    const Requests = {}

    return(
        <GlobalContext.Provider value = {{ state, setters, Requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
     }
      
 
    export default GlobalState