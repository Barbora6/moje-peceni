import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import {recepies} from '../data/data_recepies'
import {useParams } from "react-router-dom";


export const OneRecipe = () => {

  let { id } = useParams();
  const data = recepies.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

  const{title, image, description, difficulty, time } = data  

  return <> 
          <Card key={id}>
          <CardMedia component='img'  width='100%'sx={{ Maxheight: '100%' }} src={`/pictures/${image}`}></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}><div dangerouslySetInnerHTML={{__html:description}}/>
            </Typography>
            <Typography gutterBottom variant="p" component="div" paddingTop='12px' fontSize='16px' fontWeight='300'>Obtížnost:{difficulty} {time} min.</Typography>
          </CardContent>
          </Card>
 </>
}
