import React from "react"
import { useHistory } from "react-router-dom";


function Pokedex () {

  const history = useHistory()

  const goToHome = () => {
      history.push("/")
  }

  
  return(
      <div>
          <h1>Pokedex</h1>
          
          <button onClick = {() => goToHome()}>Voltar para a Home</button>
          
          
      </div>
  )
}


export default Pokedex;