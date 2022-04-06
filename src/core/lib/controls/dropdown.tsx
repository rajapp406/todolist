import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
import { globalConfig as config } from "../../config";
function DropDownUI({ title, options, selection, onChange }) {
    selection = selection || options[0];
    const onSelection = (e) => onChange(options.find(v => v.key === e.target.value))
    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selection.key}
            label={title}
            variant={config.variant}
            onChange={onSelection}
          >
            {options.map((v) => (
              <MenuItem key={v.key} value={v.key}>
                {v.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }

  export default DropDownUI;