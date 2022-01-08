import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodos, updateTodos } from '../../store/todo/reducer';

const TodosItem = ({ todo }) => {
    const dispatch = useDispatch();

    const changeStatusHandler = () => {
        dispatch(updateTodos(todo.id));
    }

    const deleteTodoHandler = () => {
        dispatch(deleteTodos(todo.id));
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
