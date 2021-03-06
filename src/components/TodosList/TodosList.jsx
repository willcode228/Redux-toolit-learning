import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../store/todo/thunks';
import TodosItem from './TodosItem';

const TodosList = () => {
	const dispatch = useDispatch();
	const {todos, error} = useSelector(state => state.todo);

	useEffect(() => {
		dispatch(setTodos());
	}, [dispatch]);

	return (
		<>
			{error && <h2>Error message</h2>}
			<ul>
				{todos.map(todo => <TodosItem todo={todo} key={todo.id}/>)}
			</ul>
		</>
	);
};

export default TodosList;
