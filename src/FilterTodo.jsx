import React from "react";
import { useState } from "react";
//import { TextField } from "@mui/material";

import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterTodo = ({ inputFilter, setInputFilter }) => {
  const handle = (e) => {
    setInputFilter(e.target.value);
  };

  return (
    <div>
      <TextField
        value={inputFilter}
        onChange={handle}
        variant="outlined"
        size="small"
        margin="normal"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* <TextField
        id="filled-helperText"
        label="Search by title"
        defaultValue="Default Value"
        // helperText="Some important text"
        variant="filled"
        value={inputFilter}
        onChange={handle}
      /> */}
      {/* <input type="search" value={inputFilter} onChange={handle} /> */}
    </div>
  );
};

export default FilterTodo;
