import React from "react"
import PokeCard from "../../components/PokeCard/PokeCard";
import { useHistory } from "react-router-dom";


function Home () {

  const history = useHistory()

  const goToPokedex = () => {
      history.push("/Pokedex")
  }

  
  return(
      <div>
          <h1>HOME</h1>
         <PokeCard/>
          
          <button onClick = {() => goToPokedex()}>Pokedex</button>
          
          
      </div>
  )
}


export default Home;