import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todo/reducer';

const rootReducers = combineReducers({
    todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducers,
});