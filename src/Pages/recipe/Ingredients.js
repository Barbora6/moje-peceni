import { Typography } from '@mui/material'

export const Ingredients = ({ingredients}) => {

  const ingredientsArray = ingredients.split(',')

  return <>
    <Typography variant='h6'>Suroviny:</Typography>
    <Typography component='div' variant="body2" sx={{ color: 'text.secondary'}}>
     <ul>
      {
        ingredientsArray.map((item) => {
          return <li key={item}>{item.trim()}</li>
        })
      }
     </ul>
      </Typography>
</>
}