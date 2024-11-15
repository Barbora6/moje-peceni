import recepiesCookies from '../../data/data_cookies'
import { useState } from 'react'
import { Box, Card, CardContent, CardActions, CardMedia, Typography } from '@mui/material'

const Cookies = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  console.log(article);
  }

  return <Box Width='1200px' display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>

     {
           recepiesCookies.map((oneCook) => {
            const{id, title, image} = oneCook
    
            return <article key={id} onClick={() => handleArticleClick(oneCook)}>
             <Box width='280px' padding='8px'>
                <Card>
                  <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>{title}</Typography>
                  <CardMedia
                          component='img'
                          height='240'
                          width='350'
                          image= {`pictures/${image}`}>
                          </CardMedia>
                           {/* <Typography variant='body2' color='text.secondary'><div dangerouslySetInnerHTML={{__html:description}}/></Typography> */}
                          {/* <Typography variant='body2' color='text.secondary'>Čas přípravy: {time} minut</Typography> */}
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

export default Cookies