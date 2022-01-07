import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodosStatus } from '../../store/todo/thunks';

const TodosItem = ({ todo }) => {
    const dispatch = useDispatch();

    const changeStatusHandler = () => {
        dispatch(updateTodosStatus(todo.id));
    }

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <li className={`${todo.completed ? 'completed' : 'uncompleted'}`} >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={changeStatusHandler}
            />

            <span>{todo.title}  </span>
            
            <button onClick={deleteTodoHandler}>x</button>
        </li>
    )
}

export default TodosItem
