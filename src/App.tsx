//import logo from './logo.svg';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/add-todo.component";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React from "react";
import  { Routes } from 'react-router'
import TodoList from "./components/todo-list.component";
import Dashboard from "./components/dashboard.component";
import UpdateTodo from "./components/update-todo.component";
import Navigation from "./core/navigation/navigation";
import ToDoListWrapper from "./pages/todo-list-wrapper.component";
import Checklist from "./components/checklist.component";
import MoneyManagement from "./components/money-manage.component";

function App(props) {
  console.log(props)
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/add" element={<AddTodo/>} />
          <Route path="/update/:id" element={<UpdateTodo/>} />
          <Route path="/list" element={<ToDoListWrapper/>} />
          <Route path="/checklist" element={<Checklist/>} />
          <Route path="/money-management" element={<MoneyManagement/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
