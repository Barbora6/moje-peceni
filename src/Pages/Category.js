import {data_categories} from '../data/data_categories';
import {useParams } from "react-router-dom";
import { Container, Stack, ImageList, Typography } from '@mui/material'
import {RecipeBox} from '../components/layout/RecipeBox'
import {recepies} from '../data/data_recepies'


export const Category = () => {
  let { id } = useParams();
  const data = data_categories.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

const categoryRecipes = recepies.filter((oneRecipe) =>{
    return oneRecipe.categoryId === parseInt(id)
})
   

  return <Container maxWidth='lg'>
  <Stack spacing={4} mt={4}>
    <Typography variant='h4'>{data.title}</Typography>
    <Typography>{data.paragraph}</Typography>
    <ImageList
        variant='masonry'
        cols={4}
        rowHeight={240}
        gap={12}
    >
        {
            categoryRecipes.map((item) => {
              return <RecipeBox key={item.id} {...item}/>
            }          
          )}
    </ImageList>
  </Stack>
  </Container>
}
