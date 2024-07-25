import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    if (title) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        variant="outlined"
        size="small"
        margin="normal"
        placeholder="Search..."
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add Task
      </Button>

      {/* <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add Todo</button> */}
    </Box>
  );
};

export default AddTodo;
