import {
  Container,
  CardMedia,
  Typography,
  Stack,
  CircularProgress
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";
import { Ingredients } from "./Ingredients";
import { GiCook } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import { useAppContext } from "../../context/AppContext";

export const OneRecipe = () => {
  const { dataRecepies } = useAppContext();
  let { id } = useParams();
  const data = dataRecepies.find((oneRecipe) => {
    return oneRecipe.id === parseInt(id);
  });

  console.log(dataRecepies, data);

  const loading = dataRecepies.length === 0 || !data;
  if (loading) {
    return (
      <Container maxWidth="md">
        <Stack>
          <CircularProgress />
        </Stack>
      </Container>
    );
  }

  const { title, image, description, difficulty, time, ingredients } = data;

  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="h4" component="div" pt={4}>
        {title}
      </Typography>
      <Stack direction="row" gap={2} mb={2} sx={{ color: "text.secondary" }}>
        <Stack direction="row" alignItems="center" gap={0.5}>
          <GiCook fontSize="24px" />
          <Typography>Obtížnost:{difficulty}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={0.5}>
          <FaClock m={2} />
          <Typography>Doba přípravy: {time} min.</Typography>
        </Stack>
      </Stack>
      <Grid container spacing={4}>
        <Grid size={7}>
          <CardMedia component="img" width="100%" src={image} />
        </Grid>
        <Grid size={5}>
          <Ingredients ingredients={ingredients} />
        </Grid>
      </Grid>

      <Typography variant="h6" mt={4}>
        Popis:
      </Typography>
      <Typography
        variant="body2"
        component="div"
        sx={{
          color: "text.secondary",
          "& p": {
            my: 2
          }
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>
    </Container>
  );
};
