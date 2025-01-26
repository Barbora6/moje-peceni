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
    <div>
      <Autocomplete
        fullWidth
        filterOptions={filterOptions}
        getOptionLabel={(option) => option.title}
        value={searchRecipe}
        onChange={(event, newValue) => {
          //   setSearchRecipe(newValue);
          push(`/OneRecipe/${newValue.id}`);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={dataRecepies}
        renderInput={(params) => (
          <TextField
            {...params}
            label="kategorie"
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
    </div>
  );
};
