import {recepies} from '../data/data_recepies'
import {useParams } from "react-router-dom";

export const Resource = () => {

  let { id } = useParams();
  const data = recepies.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

  const{ingredients} = data  
    
  return <>
        <ul>{ingredients}</ul>
</>
}