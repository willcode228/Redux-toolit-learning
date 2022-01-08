import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos } from '../../store/todo/reducer';
import TodosItem from './TodosItem';

const TodosList = () => {
    const dispatch = useDispatch();
    const { todos, error, errorMessage, loading } = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(setTodos());
    }, []);


    return (
        <>
            <ul>
                {todos.map(todo => (
                    <TodosItem
                        todo={todo}
                        key={todo.id} 
                    />
                ))}
            </ul>

            {loading && <h2>Loading...</h2>}
            {error && <h2>{errorMessage}</h2>}
        </>
    )
}

export default TodosList
