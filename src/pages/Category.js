import { useParams } from "react-router-dom";
import {
  Container,
  Stack,
  ImageList,
  Typography,
  CircularProgress
} from "@mui/material";
import { RecipeBox } from "../components/layout/RecipeBox";
import { useAppContext } from "../context/AppContext";

export const Category = () => {
  const { dataCategories, dataRecepies } = useAppContext();
  let { id } = useParams();
  const data = dataCategories.find((oneRecipe) => {
    return oneRecipe.id === parseInt(id);
  });

  const categoryRecipes = dataRecepies.filter((oneRecipe) => {
    return oneRecipe.categoryId === id;
  });

  const loading = dataRecepies.length === 0 || !data;

  return (
    <Container maxWidth="lg">
      {loading ? (
        <Stack>
          <CircularProgress my={4} />
        </Stack>
      ) : (
        <Stack spacing={4} mt={4}>
          <Typography variant="h4">{data.title}</Typography>
          <Typography>{data.description}</Typography>
          <ImageList variant="masonry" cols={3} rowHeight={280} gap={16}>
            {categoryRecipes.map((item) => {
              return <RecipeBox key={item.id} {...item} />;
            })}
          </ImageList>
        </Stack>
      )}
    </Container>
  );
};
