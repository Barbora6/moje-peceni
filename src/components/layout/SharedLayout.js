import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Link component={RouterLink} to="/">
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ color: "white" }}
                    display={"inline-block"}
                  >
                    {" "}
                    MojePečení
                  </Typography>
                </Link>
              </Box>
              <Navbar />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};
