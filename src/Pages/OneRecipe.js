import CloseIcon from '@mui/icons-material/Close';
// import { FaXmark } from "react-icons/fa6";
import { Box, Card, Stack, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
import recepiesCookies from '../data/data_cookies'
import {useParams } from "react-router-dom";


const OneRecipe = () => {
  let { id } = useParams();
  console.log(id)
  const data = recepiesCookies.find((oneRecipe) =>{
      return oneRecipe.id === parseInt(id)
  })

  console.log(data)
  const{title, image, description1, description2, difficulty, time } = data  

  return <>
          <article key={id}>
              <h2>{title}</h2>
              <img src={`pictures/${image}`} alt="" />
              <div dangerouslySetInnerHTML={{__html:description1}}/>
              <p>{description1}</p>
              <p>{difficulty}</p>
              <p>{time}</p>
          </article>





  {/* <Box position='absolute' top='20px' display='flex' justifyContent='center' alignContent='center' zIndex='1000'>
    // <Card sx={{ maxWidth: 645,  backgroundColor: 'light.grey'  }}>
      {/* <FaXmark onClick={onClose}/> */}

      {/* <Stack position='absolute' right='20px'>
        <IconButton size='large' color='error' onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      </Stack>

      {
        article && (
            <>
      <CardMedia
        component='img'
        width='450px'
        sx={{ maxHeight: 'auto' }}
        image={article.image}
        title={article.title}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}}>
       {article.description1}{article.description2}{article.description3} 
        </Typography>
        <Typography gutterBottom variant="p" component="div" paddingTop='12px' fontSize='16px' fontWeight='300'>Obtížnost:
        {article.difficulty} {article.time}
        </Typography>
      </CardContent>
    </>
        )
      }
     </Card>
  </Box> */} 
 </>
}

export default OneRecipe