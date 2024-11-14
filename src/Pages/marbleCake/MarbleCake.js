import recepiesMarbleCake from '../../data/data_marbleCake'
import { useState } from 'react'

const MarbleCake = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  }


  return <section>
    <h2>Bábovky</h2>

    {
        recepiesMarbleCake.map((oneRecipe) => {
            const{id, image, title, description, difficulty, time} = oneRecipe
            
            return <article key={id} onClick={() => handleArticleClick(oneRecipe)}>
            <h2>{title}</h2>
            <img src={`pictures/${image}`} alt="" />
            <div dangerouslySetInnerHTML={{__html:description}}/>
            <p>{description}</p>
            <p>{difficulty}</p>
            <p>{time}</p>
            <a href={`/OneRecipe/${id}`}>Detail:</a>
          </article>
        })

    }

  </section>

}

export default MarbleCake