import { Container, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {recepies} from '../data/data_recepies'
import {useParams } from "react-router-dom";
import { Resource } from './Resource';


export const OneRecipe = () => {

  let { id } = useParams();
  const data = recepies.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

  const{title, image, description, difficulty, time } = data  

  return <Container maxWidth='lg'>
          <Card key={id}>
          <CardMedia component='img' width='100%'sx={{ Maxheight: '100%' }} src={`/pictures/${image}`}></CardMedia>
          {/* Suroviny: */}
          <CardContent>
          <Typography variant='h5'>Suroviny:</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            <Resource/>
          </Typography>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}><div dangerouslySetInnerHTML={{__html:description}}/>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>Obtížnost:{difficulty} {time} min.</Typography>
          </CardContent>
          </Card>
   </Container>
}
