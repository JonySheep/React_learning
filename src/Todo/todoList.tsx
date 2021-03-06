import * as React from  'react'
import Todo from './todo'
import PropTypes from 'prop-types'

const todoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo, index)=>{
            <Todo key={index} {...todo} onClick={()=>onTodoClick(index)}/>
        })}
    </ul>
);

todoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            complete: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default todoList
