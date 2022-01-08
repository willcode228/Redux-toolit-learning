import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApi } from '../../api/todoApi';

const errorHelper = (state, action) => {
    state.error = true;
    state.errorMessage = action.payload;
}

export const setTodos = createAsyncThunk(
    'todos/setTodos',
    async (_, { rejectWithValue }) => {
        try {
            const todos = await todoApi.getTodos();

            if (todos.statusText) {
                throw new Error(todos.statusText);
            }

            return todos.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteTodos = createAsyncThunk(
    'todos/deleteTodos',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const isDelete = await todoApi.deleteTodo(id);

            if (isDelete.statusText) {
                throw new Error(isDelete.statusText);
            }

            dispatch(deleteTodosSuccess(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const updateTodos = createAsyncThunk(
    'todos/updateTodos',
    async (id, { rejectWithValue, dispatch, getState }) => {
        try {
            const updatedTodos = getState().todo.todos.find(todo => todo.id === id);
            const updatedResponse = await todoApi.updateTodosStatus({ id, completed: !updatedTodos.completed });

            if (updatedResponse.statusText) {
                throw new Error(updatedResponse.statusText);
            }

            dispatch(updateTodosStatusSuccess(id));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addTodos = createAsyncThunk(
    'todos/addTodos',
    async (title, {rejectWithValue, dispatch}) => {

        try {
            const addTodosResponse = await todoApi.addTodos({ title, userId: 1});
            
            if (addTodosResponse.statusText) {
                throw new Error(addTodosResponse.statusText);
            }
            
            dispatch(addTodosSuccess(addTodosResponse.data))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


const todoReducer = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: false,
        errorMessage: '',
    },
    reducers: {
        deleteTodosSuccess(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodosStatusSuccess(state, action) {
            const updatedTodos = state.todos.find(todo => todo.id === action.payload);
            updatedTodos.completed = !updatedTodos.completed;
        },
        addTodosSuccess(state, action) {
            state.todos.push(action.payload);
        }
    },
    extraReducers: {
        [setTodos.pending]: (state) => {
            state.error = false;
            state.loading = true;
        },
        [setTodos.fulfilled]: (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        },
        [setTodos.rejected]: errorHelper,
        [deleteTodos.rejected]: errorHelper,
        [updateTodos.rejected]: errorHelper,
        [addTodos.rejected]: errorHelper,
    }
});

export const { deleteTodosSuccess, updateTodosStatusSuccess, addTodosSuccess } = todoReducer.actions;
export default todoReducer.reducer;