import React, { useEffect } from "react";
import { useState } from "react";
import { createToDo } from "../actions/todo.action";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./todo-form.component";
import { MessageUI } from "../core/lib";
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import { Button } from "@mui/material";
import LinkButton from "../core/lib/controls/LinkButton";
function AddTodo(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const save = (title, description) => {
    dispatch(createToDo(title, description));
  };
  const x = useSelector((state: any) => state.todoReducer);

  const intialConfig = {
    submit: "Add",
    cancel: "Go Back",
    data: {
      name: "",
      description: "",
    },
    action: save,
  };
  const [config, setConfig] = useState(intialConfig);
const [showTask, setShowTask] = useState(false)
  return (
    <div>
      <MessageUI message = {message} status={status}/>
      <LinkButton onClick={() =>setShowTask(true)}><TaskAltSharpIcon /> Create a Task</LinkButton>
      {showTask?<TodoForm config={config}></TodoForm>:''}
    </div>
  );
}
export default AddTodo;
