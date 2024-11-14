import recepiesMuffiny from '../../data/data_muffiny'
import { useState } from 'react'

const Muffiny = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  }

  return <section>
      <h2>Muffiny</h2>

      {
        recepiesMuffiny.map((oneMuffin) => {
            const{id, title, image, description, difficulty, time} = oneMuffin
            
            return <article key={id} onClick={() => handleArticleClick(oneMuffin)}>
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

export default Muffiny