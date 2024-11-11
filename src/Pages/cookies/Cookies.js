import recepiesCookies from '../../data/data_cookies'
import OneRecipe from '../OneRecipe'
import { useState } from 'react'

const Cookies = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  console.log(article);
  }


  return <section>
     <h2>Vánoční cukroví</h2>
          
     {
           recepiesCookies.map((oneCook) => {
            const{id, title, image, description1, description2, difficulty, time } = oneCook
    
            return <article key={id} onClick={() => handleArticleClick(oneCook)}>
              <h2>{title}</h2>
              <img src={image} alt="" />
              <p>{description1}</p>
              <p>{description2}</p>
              <p>{difficulty}</p>
              <p>{time}</p>
            </article>
          })
     }
     
     <OneRecipe show={showRecipe} article={selectedArticle} onClose={() => setShowRecipe(false)}/>
  </section>
}

export default Cookies