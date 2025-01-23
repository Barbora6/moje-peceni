import {
  Alert,
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";
import { supabase } from "../../context/utils";
import { Check } from "@mui/icons-material";
import { useAppContext } from "../../context/AppContext";
import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

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
  const [imageFile, setImageFile] = useState();
  const [loading, setLoading] = useState(false);

  console.log(imageFile);

  const handleClick = async () => {
    setLoading(true);
    const { data } = await supabase.storage
      .from("images")
      .upload(`public/${Date.now()}`, imageFile);

    const { data: publicUrlData } = supabase.storage
      .from("images")
      .getPublicUrl(data.path);
    const image = publicUrlData.publicUrl;

    const recipe = {
      categoryId,
      title,
      difficulty,
      ingredients,
      description,
      time,
      image
    };
    const { status } = await supabase.from("recepies").insert(recipe);
    setStatus(status);
    setLoading(false);
  };

  const { dataCategories } = useAppContext();

  const handleContentChange = (value) => {
    setDescription(value);
  };

  return (
    <Container maxWidth="sm">
      {loading && (
        <Stack>
          <CircularProgress />
        </Stack>
      )}

      <Stack spacing={4} mt={4}>
        {status === 201 ? (
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            Tvůj recept byl odeslán.
          </Alert>
        ) : (
          <>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setImageFile(event.target.files[0])}
              />
            </Button>
            {imageFile && (
              <Typography>Nahraný soubor: {imageFile.name}</Typography>
            )}

            <TextField
              select
              label="kategorie"
              value={categoryId}
              onChange={(event) => {
                setCategoryId(event.target.value);
              }}
            >
              {dataCategories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
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

            <ReactQuill
              value={description}
              onChange={handleContentChange}
              placeholder="popis"
              modules={{
                toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]]
              }}
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
                  helperText="Jednotlivé suroviny potvrďte Entrem."
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
              sx={{ width: 200 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">min.</InputAdornment>
                  )
                }
              }}
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
