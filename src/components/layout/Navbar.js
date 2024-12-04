import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { data_categories } from "../../data/data_categories";

export const Navbar = () => {
  return (
    <header>
      <Stack direction={"row"} gap={4}>
        <Link component={RouterLink} to="/" sx={{ color: "white" }}>
          Domů
        </Link>
        {data_categories.map(({ id, title }) => {
          return (
            <Link
              key={id}
              component={RouterLink}
              to={`/category/${id}`}
              sx={{ color: "white" }}
            >
              {title}
            </Link>
          );
        })}
      </Stack>
    </header>
  );
};
