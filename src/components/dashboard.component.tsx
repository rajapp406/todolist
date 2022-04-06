import React from 'react'
import TodoList from './todo-list.component'
import AddTodo from './add-todo.component'
function Dashboard() {
    return (
        <div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
        </div>
    )
}

export default Dashboard;
