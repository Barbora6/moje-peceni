import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Error } from "./pages/Error";
import { OneRecipe } from "./pages/recipe/OneRecipe";
import { Category } from "./pages/Category";
import { SharedLayout } from "./components/layout/SharedLayout";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppProvider } from "./context/AppContext";
import { Form } from "./pages/form/Form";
import { createTheme, ThemeProvider } from "@mui/material";

export const App = () => {
  const theme = createTheme({
    palette: {
      primary: { main: "#2642A6" }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/OneRecipe/:id" element={<OneRecipe />} />
              <Route path="/category/:id" element={<Category />} />
              {process.env.NODE_ENV === "development" && (
                <Route path="/form" element={<Form />} />
              )}
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};
