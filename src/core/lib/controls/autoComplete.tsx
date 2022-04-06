import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { globalConfig } from "../../config";

function AutoCompleteUI() {
    const defaultProps = {
        options: [{title: 'hello'}],
        getOptionLabel: (option) => option.title,
      };
    
      const [value, setValue] = React.useState(null);
  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as any);
        }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setValue({ title: e.target.value } as any)}
            {...params}
            label="Name"
            variant={globalConfig.variant}
          />
        )}
      />
    </div>
  );
}

export default AutoCompleteUI;
