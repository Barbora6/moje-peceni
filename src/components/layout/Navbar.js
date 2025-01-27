import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const Navbar = () => {
  const { dataCategories } = useAppContext();

  return (
    <header>
      <Stack direction={"row"} gap={4}>
        {dataCategories.map(({ id, title }) => {
          return (
            <Link
              key={id}
              component={RouterLink}
              to={`/category/${id}`}
              sx={{ color: "white", fontSize: 22 }}
            >
              {title}
            </Link>
          );
        })}
      </Stack>
    </header>
  );
};
