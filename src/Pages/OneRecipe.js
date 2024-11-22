import { Container, Card, CardContent, CardMedia, Typography, Stack} from '@mui/material';
import {recepies} from '../data/data_recepies'
import {useParams } from "react-router-dom";
import { Resource } from './Resource';
import { GiCook } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";


export const OneRecipe = () => {

  let { id } = useParams();
  const data = recepies.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

  const{title, image, description, difficulty, time } = data  

  return <Container maxWidth='lg'>
          <Card key={id}>
          <Typography gutterBottom variant="h5" component="div" spacing={4} pt={4}>{title}</Typography>
          <CardMedia component='img' width='100%'sx={{ Maxheight: '100%' }} src={`/pictures/${image}`}></CardMedia>
          {/* Suroviny: */}
          <CardContent>
          <Typography variant='h5'>Suroviny:</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'}}>
            <Resource/>
          </Typography>
          <Typography variant='h5'>Popis:</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}><div dangerouslySetInnerHTML={{__html:description}}/>
            </Typography>
            <Stack display='flex' flexDirection='row'>
            <Typography><GiCook fontSize='24px'/>obtížnost:{difficulty}</Typography>
            <Typography><FaClock m={2}/>doba přípravy: {time} min.</Typography>
            </Stack>
          </CardContent>
          </Card>
   </Container>
}
