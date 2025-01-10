import {
  Alert,
  Autocomplete,
  Button,
  Container,
  MenuItem,
  Stack,
  TextField
} from "@mui/material";
import { useState } from "react";
import { supabase } from "../../context/utils";
import { Check } from "@mui/icons-material";

export const Form = () => {
  const difficultyOptions = ["snadné", "středně těžké", "těžké"];

  const [status, setStatus] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);

  const handleClick = async () => {
    const recipe = {
      categoryId,
      title,
      difficulty,
      ingredients,
      description,
      time
    };
    const { status } = await supabase.from("recepies").insert(recipe);
    setStatus(status);
  };

  const categories = [
    {
      id: 1,
      category: "Bábovka"
    },
    {
      id: 2,
      category: "Muffiny"
    },
    {
      id: 3,
      category: "Vánoční cukroví"
    },
    {
      id: 4,
      category: "Dorty"
    }
  ];

  return (
    <Container maxWidth="sm">
      <Stack spacing={4} mt={4}>
        {status === 201 ? (
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            Tvůj recept byl odeslán.
          </Alert>
        ) : (
          <>
            <TextField
              select
              label="kategorie"
              value={categoryId}
              onChange={(event) => {
                setCategoryId(event.target.value);
              }}
            >
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.category}>
                  {option.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="název"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              fullWidth
            />

            <TextField
              label="popis"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            {/* suroviny */}
            <Autocomplete
              value={ingredients}
              onChange={(event, newValue) => {
                setIngredients(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              multiple
              freeSolo
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="suroviny"
                  placeholder="suroviny"
                />
              )}
            />
            <TextField
              select
              label="obtížnost"
              value={difficulty}
              onChange={(event) => {
                setDifficulty(event.target.value);
              }}
              fullWidth
            >
              {difficultyOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="čas"
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
              }}
              sx={{ width: 100 }}
            />
            <Button onClick={handleClick} variant="contained">
              Odeslat
            </Button>
          </>
        )}
      </Stack>
    </Container>
  );
};
