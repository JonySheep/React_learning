import * as React from 'react'
import  PropTypes from 'prop-types'

const Todo = ({onClick, complete, text}) => (
    <div style={{display: 'flex', textDecoration: complete ? 'line-through' : 'none'}}
         onClick={onClick}
    >
        {text}
    </div>
);

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;