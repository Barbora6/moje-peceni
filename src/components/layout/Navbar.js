import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const Navbar = () => {
  const { dataCategories } = useAppContext();

  return (
    <header>
      <Stack direction={"row"} gap={4}>
        <Link component={RouterLink} to="/" sx={{ color: "white" }}>
          Domů
        </Link>
        {dataCategories.map(({ id, title }) => {
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
