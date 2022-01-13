import { createReducer } from '@reduxjs/toolkit';
import {
	addTodosError,
	addTodosSuccess,
	deleteTodosError,
	deleteTodosSuccess,
	setTodosError,
	setTodosSuccess,
	updateTodosStatusError,
	updateTodosStatusSuccess
} from './actions';

const errorHelper = (state, action) => {
	state.error = true;
	state.errorMessage = action.payload;
};

const initialState = {
	todos: [],
	error: false,
	errorMessage: '',
};

export const todoReducer = createReducer(initialState, {
	[setTodosSuccess]: (state, action) => {
		state.todos = action.payload;
	},
	[updateTodosStatusSuccess]: (state, action) => {
		const updatedTodo = state.todos.find(todo => todo.id === action.payload);
		updatedTodo.completed = !updatedTodo.completed;
	},
	[deleteTodosSuccess]: (state, action) => {
		state.todos = state.todos.filter(todo => todo.id !== action.payload);
	},
	[addTodosSuccess]: (state, action) => {
		state.todos.push(action.payload);
	},
	[setTodosError]: errorHelper,
	[deleteTodosError]: errorHelper,
	[updateTodosStatusError]: errorHelper,
	[addTodosError]: errorHelper
});

