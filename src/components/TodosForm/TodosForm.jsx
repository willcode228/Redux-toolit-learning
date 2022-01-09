import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/thunks';

const TodosForm = () => {
    const dispatch = useDispatch();
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodoTitle));
        setNewTodoTitle('');
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type="text" 
                value={newTodoTitle}
                onChange={e => setNewTodoTitle(e.target.value)}
            />
            <button>Добавить</button>
        </form>
    )
}

export default TodosForm
