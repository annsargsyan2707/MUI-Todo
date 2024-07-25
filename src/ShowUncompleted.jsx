import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const ShowUncompleted = ({ setCompletedFilter }) => {
  const handleCompleted = (e) => setCompletedFilter(e.target.value);
  return (
    <div>
      <Select
        sx="height: 5"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Filter"
        onChange={handleCompleted}
        defaultValue="all"
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="not completed">Not Completed</MenuItem>
      </Select>
      {/* <select onChange={handleCompleted}>
        <option value="all">all </option>
        <option value="completed"> completed</option>
        <option value="not completed"> not completed</option>
      </select> */}
    </div>
  );
};

export default ShowUncompleted;
