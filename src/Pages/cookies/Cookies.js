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
            const{id, title, image, description, difficulty, time } = oneCook
    
            return <article key={id} onClick={() => handleArticleClick(oneCook)}>
              <h2>{title}</h2>
              <img src={`pictures/${image}`} alt="" />
              <div dangerouslySetInnerHTML={{__html:description}}/>
              <p>{difficulty}</p>
              <p>{time}</p>
              <a href={`/OneRecipe/${id}`}>Detail:</a>
            </article>
          })
     }
     
  </section>
}

export default Cookies