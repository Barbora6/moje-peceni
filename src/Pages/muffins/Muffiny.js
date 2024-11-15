import recepiesMuffiny from '../../data/data_muffiny'
import { useState } from 'react'
import { Stack, ImageList, Typography } from '@mui/material'
import RecipeBox from '../../components/layout/RecipeBox'

const Muffiny = () => {

const[showRecipe, setShowRecipe] = useState(false)
const[selectedArticle, setSelectedArticle] = useState(null)

const handleArticleClick = (article) => {
  setSelectedArticle(article)
  setShowRecipe(true)
  }

  return <Stack spacing={4} mt={4}>
    <Typography variant='h4'>Muffiny</Typography>
    <ImageList
        variant='masonry'
        cols={4}
        rowHeight={240}
        gap={12}
    >
        {
            recepiesMuffiny.map((item) => {
              return <RecipeBox key={item.id} {...item}/>
            }          
          )}
    </ImageList>
  </Stack>
}

export default Muffiny