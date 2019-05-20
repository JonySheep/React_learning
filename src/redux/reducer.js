import {ADD_TODO, TOGGLE_TODO} from "./actions";
import {combineReducers} from  'redux'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]
        }
        case TOGGLE_TODO:
            return state.map(todo=>
                (todo.id === action.id) ?
                    {...todo, complete: !todo.complete}
                    : todo
            );
        default: return state
    }
}

const todoApp = combineReducers({todos});
export default todoApp