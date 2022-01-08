import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../../store/todo/reducer';

const TodosForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(title.trim()){
            dispatch(addTodos(title));
        }
    }

    return (
        <form 
            onSubmit={addTodoHandler}
        >
            <input
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button>Добавить</button>
        </form>
    )
}

export default TodosForm
