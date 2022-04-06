import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { retrieveToDos, searchTodos } from '../actions/todo.action';
import TodoList from '../components/todo-list.component'
import TodoFilter from '../core/lib/todo.filter';
import { TodoModel } from '../core/models/todo.model';
import { ToDoFilter } from '../core/types/todo-filter.type';

function ToDoListWrapper() {
    const [query, setQuery] = useState({title: '', status: ''})

    const onFilterValues = (e:ToDoFilter) => setQuery(e);
    return (
        <div>
            <TodoFilter onFilterValues={onFilterValues} />
            <TodoList query={query}/>
        </div>
    )
}

export default ToDoListWrapper;
