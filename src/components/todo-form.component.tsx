import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { globalConfig } from "../core/config";

function TodoForm(props) {
  const [data, setData] = useState(props.config.data);
  const setFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    setData(props.config.data);
  }, [props.config.data]);

  const save = () => {
    props.config.action(data.name, data.description);
  };
  const cancel = () => {
    navigate("/list");
  };
  return (
    <Card
      variant="outlined"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "95%" },
        "& .MuiCardActions-root": { ml: 2 },
      }}
    >
      <CardContent>
        <TextField
          id="standard-basic"
          label="Task Name"
          variant={globalConfig.variant}
          value={data.name}
          fullWidth
          name="name"
          onChange={setFormData}
          placeholder="Task Name"
        />

        <TextField
          id="standard-basi2c"
          label="Description"
          variant={globalConfig.variant}
          value={data.description}
          multiline
          rows={4}
          fullWidth
          maxRows={4}
          name="description"
          onChange={setFormData}
          placeholder="Task Description"
        />
      </CardContent>

      <CardActions>
        <Button variant="contained" onClick={() => save()}>
          {props.config.submit}
        </Button>
        {props.config.cancel && (
          <Button variant="contained" onClick={() => cancel()}>
            {props.config.cancel}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
export default TodoForm;
