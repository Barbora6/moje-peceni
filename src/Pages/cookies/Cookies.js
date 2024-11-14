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

  return <section>

     {
           recepiesCookies.map((oneCook) => {
            const{id, title, image} = oneCook
    
            return <article key={id} onClick={() => handleArticleClick(oneCook)}>
             <Box width='300px'>
                <Card>
                  <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>{title}</Typography>
                        <CardMedia
                          component='img'
                          height='140'
                          width='250px'
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
  
  </section>
}

export default Cookies