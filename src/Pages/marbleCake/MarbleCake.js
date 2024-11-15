import recepiesMarbleCake from '../../data/data_marbleCake'
import { useState } from 'react'
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar, CardActions } from '@mui/material'


const MarbleCake = () => {

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
            recepiesMarbleCake.map((item) => {
              return <ImageListItem key={item.id} onClick={() => handleArticleClick(item)}>
                    <img 
                    src={`pictures/${item.image}`} 
                    alt='' 
                    loading='lazy' />
                    <ImageListItemBar title={item.title}/>
                    </ImageListItem>
            }          
          )}
    </ImageList>
</Box>

  </Stack>

}

export default MarbleCake

