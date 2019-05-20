import * as React from  'react';
import AddTodo from "./addTodo";
import VisibleTodoList from "./visibleTodoList";

const App = () => (
    <div>
        <h1>Todo List</h1>
        <AddTodo />
        <VisibleTodoList/>
    </div>
);

export default App
