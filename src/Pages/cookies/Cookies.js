import {recepies} from '../../data/data_recepies'
import { useState } from 'react'
import { Stack, ImageList, Box } from '@mui/material'
import {RecipeBox} from '../../components/layout/RecipeBox'

export const Cookies = () => {

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
          recepies.map((item) => {
            return <RecipeBox key={item.id} {...item}/>
        
          }          
        )}
  </ImageList>
</Box>

</Stack>

}


