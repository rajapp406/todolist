import { Button } from "@mui/material";
import React, { useState } from "react";
import ToDoTextField from "./controls/TextField";
import DropDownStatus from "./wrappers/DropDownStatus";

function TodoFilter({ onFilterValues }) {
  const intialVal = { title: "", status: "" };
  const [filter, setFilter] =  useState(intialVal)
 // const [filter, setFilter] = useSanatizeFilter(intialVal);
  const onFilterChange = (key, val) => {
    setFilter({ ...filter, [key]: val });
  };
  const reset = () => {
    setFilter(intialVal);
    onFilterValues(intialVal);
  };

  const onEnter = (e) => {
    if (e.which === 13) {
      const query = {...filter, title : filter.title.trim()};
      onFilterValues(query);
    }
  };
  return (
    <div className="flex">
      <ToDoTextField
        value={filter.title}
        onKeyDown={onEnter}
        onChange={(e) => onFilterChange("title", e.target.value)}
        fullWidth
      />
      <DropDownStatus
        selection={filter.status}
        onStatusChange={(e) => onFilterChange("status", e)}
      />
      <Button onClick={() => onFilterValues(filter)} variant="contained">
        Submit
      </Button>
      <Button onClick={() => reset()} variant="contained">
        Reset
      </Button>
    </div>
  );
}

export default TodoFilter;
