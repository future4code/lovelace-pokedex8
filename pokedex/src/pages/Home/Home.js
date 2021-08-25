import React from "react"
import PokeCard from "../../components/PokeCard/PokeCard";



function Home () {

  const history = useHistory()

  const goToPokedex = () => {
      history.push("/Pokedex")
  }

  
  return(
      <Container>
          <h1>HOME</h1>
          <Buttons> 
          <button onClick = {() => goToPokedex()}>Pokedex</button>
          
          </Buttons>
      </Container>
  )
}


export default Home;