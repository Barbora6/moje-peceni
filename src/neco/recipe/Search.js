import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import {
  Autocomplete,
  Box,
  createFilterOptions,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { dataRecepies } = useAppContext();
  const [searchRecipe, setSearchRecipe] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const push = useNavigate();

  const filterOptions = createFilterOptions({
    stringify: ({ title, description }) => title + description
  });

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        bottom: 140,
        transform: "translateX(-50%)",
        zIndex: 100
      }}
    >
      <Autocomplete
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.title}
        value={searchRecipe}
        onChange={(event, newValue) => {
          setSearchRecipe(newValue);
          push(`/OneRecipe/${newValue.id}`);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={dataRecepies}
        renderInput={(params) => (
          <TextField
            sx={{
              width: 500,
              backgroundColor: "white",
              color: "white",
              border: "2px solid white",
              borderRadius: "8px"
            }}
            {...params}
            label="Vyhledávání receptů"
            placeholder="Vyhledávání receptů..."
          />
        )}
        renderOption={(props, recipe, state, ownerState) => {
          const { key, ...optionProps } = props;
          return (
            <Box key={key} component="li" {...optionProps}>
              {recipe.title}
            </Box>
          );
        }}
      />
    </Box>
  );
};
