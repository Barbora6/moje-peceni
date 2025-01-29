import { Typography } from "@mui/material";

export const Ingredients = ({ ingredients }) => {
  return (
    <>
      <Typography variant="h6">Suroviny:</Typography>
      <Typography
        component="div"
        variant="body2"
        sx={{ color: "text.secondary", pl: 2, mt: 2 }}
      >
        <ul>
          {ingredients.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </Typography>
    </>
  );
};
