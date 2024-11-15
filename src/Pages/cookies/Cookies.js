import recepiesCookies from '../../data/data_cookies'
import { useState } from 'react'
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from '@mui/material'

const Cookies = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  }

  return <Stack spacing={4}>
  <Box sx={{width:1200, height: 550, overflowY:'scroll'}}>
  <ImageList
      variant='masonry'
      cols={4}
      rowHeight={224}
      gap={8}
  >
      {
          recepiesCookies.map((item) => {
            return <ImageListItem key={item.id} onClick={() => handleArticleClick(item)}>
                  <img 
                  src={`pictures/${item.image}`} 
                  alt='' 
                  loading='lazy' />
                  <ImageListItemBar title={item.title}/>
                  </ImageListItem>
                  // <CardActions>
                  // <a href={`/OneRecipe/${id}`}>Detail:</a>
                  // </CardActions>
          }          
        )}
  </ImageList>
</Box>

</Stack>

}

export default Cookies


