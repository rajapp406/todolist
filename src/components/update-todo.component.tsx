import React, { useEffect, useState } from "react";
import {updateToDo} from "../actions/todo.action";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./todo-form.component";
import { useParams } from "react-router-dom";
import todoService from "../services/todo.service";
function UpdateTodo(props) {
  const dispatch = useDispatch();
 const params = useParams();
 const intialConfig = {
  submit: 'Save',
  cancel: 'Go Back',
  data: {
    name: 's',
    description: 'f',
    id: -1
  }
  }
  const [config, setConfig] = useState(intialConfig);

 useEffect(
     () =>{
      todoService.get(params.id).then(res =>{
        const {data: { title, _id, description} } = res;
        const x = {} as any
         x.data = {name: title, id: _id, description}
         x.action = save
        setConfig({...intialConfig, ...x});
      })
     }, [params.id]
 )
  const save = (title, description) => {   
    dispatch(updateToDo(params.id, {title, description}));
  };

  
 
  return (
    <div>
     <TodoForm config={config}></TodoForm>
    </div>
    
  );
}
export default UpdateTodo;
