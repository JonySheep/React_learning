export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let todoId = 0;
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: todoId++,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}