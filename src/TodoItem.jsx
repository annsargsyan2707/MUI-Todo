import React, { useState } from "react";
import { Checkbox, TextField, Button, Box, Typography } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const TodoItem = ({
  id,
  title,
  completed,
  toggleComplete,
  handleEdit,
  removeTodo,
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const handleEditVal = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Box
      component="li"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      <Checkbox
        checked={completed}
        onChange={() => toggleComplete(id)}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        inputProps={{ "aria-label": "complete task" }}
      />
      <Box display="flex" alignItems="center" flexGrow={1}>
        {isEdited ? (
          <TextField
            type="text"
            onChange={handleEditVal}
            value={inputValue}
            variant="outlined"
            size="small"
            fullWidth
          />
        ) : (
          <Typography
            variant="body1"
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "red" : "black",
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
      <Box>
        <Button
          onClick={() => {
            if (isEdited) {
              handleEdit(id, inputValue);
            }
            setIsEdited(!isEdited);
          }}
          variant="contained"
          color={isEdited ? "primary" : "secondary"}
          size="small"
          sx={{ ml: 1 }}
        >
          {isEdited ? "Save" : "Edit"}
        </Button>
        <Button
          onClick={() => removeTodo(id)}
          variant="contained"
          color="error"
          size="small"
          sx={{ ml: 1 }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
