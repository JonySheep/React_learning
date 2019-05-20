import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import PropTypes from 'prop-types'

let AddTodo = ({addClick}) => {
    let input = "";
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                addClick(input.value);
                input.value = '';
            }}>
                <input
                    ref={node => {
                        input = node
                    }}
                />

                <button type="submit">
                    Add Todo
                </button>

            </form>
        </div>
    )
};

AddTodo.PropTypes = {
    addClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return{

    }
};

const mapDispatchToProps = dispatch => {
    return {
        addClick: text => {
            dispatch(addTodo(text))
        }
    }
};

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default AddTodo