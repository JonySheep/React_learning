import {connect} from 'react-redux'
import {toggleTodo} from '../redux/actions'
import TodoList from './todoList'

const getTodos = (todos) => {
    return todos;
};

const mapStateToProps = state => {
    return{
        todos: getTodos(state.todos)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps, mapDispatchToProps
)(TodoList);

export default VisibleTodoList