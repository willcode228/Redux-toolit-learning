import { createAction } from '@reduxjs/toolkit';

export const addTodosSuccess = createAction('TODO/ADD_TODOS_SUCCESS');
export const addTodosError = createAction('TODO/ADD_TODOS_ERROR');

export const setTodosSuccess = createAction('TODO/SET_TODOS_SUCCESS');
export const setTodosError = createAction('TODO/SET_TODOS_ERROR');

export const updateTodosStatusSuccess = createAction('TODO/UPDATE_TODOS_STATUS_SUCCESS');
export const updateTodosStatusError = createAction('TODO/UPDATE_TODOS_STATUS_ERROR');

export const deleteTodosSuccess = createAction('TODO/DELETE_TODOS_SUCCESS');
export const deleteTodosError = createAction('TODO/DELETE_TODOS_ERROR');

