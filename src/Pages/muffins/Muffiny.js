import recepiesMuffiny from '../../data/data_muffiny'
import { useState } from 'react'
import { Box } from '@mui/system'
import { Card, CardContent, CardMedia, CardActions, Typography } from '@mui/material'

const Muffiny = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  }

  return <Box Width='1800px' display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>

      {
        recepiesMuffiny.map((oneMuffin) => {
            const{id, title, image} = oneMuffin
            
            return <article key={id} onClick={() => handleArticleClick(oneMuffin)}>
              <Box>
                <Card>
                  <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>{title}</Typography>
                  <CardMedia
                          component='img'
                          height='240px'
                          width='350px'
                          image={`pictures/${image}`}
                          >
                  </CardMedia>
                  <CardActions>
                    <a href={`/OneRecipe/${id}`}>Detail:</a>
                  </CardActions>
                  </CardContent>
                </Card>
              </Box>
            </article>
          })

      }
  </Box>
}

export default Muffiny