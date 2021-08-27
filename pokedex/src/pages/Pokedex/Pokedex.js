import React, { useContext } from "react"
import { useHistory } from "react-router-dom";
import GlobalContext from "../../global/GlobalContext";
import PokedexItem from "../../components/PokedexItem/PokedexItem";

function Pokedex () {

  const history = useHistory()
  const {state, setters, requests} = useContext(GlobalContext)

  const goToHome = () => {
      history.push("/")
  }
  const goToDetailPage = (name) => {
    history.push(`/details/${name}`)
  }

  const pokedexComponents = state.pokedex && state.pokedex.map((item)=> {
    return <div key = {item.name}>
    <ul> 
        <li><p>Nome do pokemon {item.name} </p>
        <img /> 
            <button onClick={() => setters.removePokeFromPokedex(item.name)}>Remover da pokedex</button>
            <button onClick = {(()=>goToDetailPage(item.name))} >Detalhes</button>
            </li>
         </ul>  
         
    </div> 
      })
  
  
  console.log("estado:", state)
  
  return(
      <div>
          <h1>Pokedex</h1>
          
          {pokedexComponents}
          <button onClick = {() => goToHome()}>Voltar para a Home</button>
          
          
      </div>
  )
}


export default Pokedex;