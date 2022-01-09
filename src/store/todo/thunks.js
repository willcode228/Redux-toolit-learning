import { todoApi } from '../../api/todoApi';
import { addTodosSuccess, deleteTodosError, deleteTodosSuccess, setTodosError, setTodosSuccess, updateTodosStatusError, updateTodosStatusSuccess } from './actions';

export const setTodos = () => (dispatch) => {
    todoApi.getTodos()
        .then(todos => {
            dispatch(setTodosSuccess(todos));
        })
        .catch(error => {
            dispatch(setTodosError(error.message));
        });
}

export const updateTodosStatus = (id) => (dispatch, getState) => {
    const updatedTodo = getState().todo.todos.find(todo => todo.id === id),
        requestObj = {id, completed: !updatedTodo.completed};

    todoApi.updateTodosStatus(requestObj)
        .then(() => {
            dispatch(updateTodosStatusSuccess(id));
        })
        .catch(error => {
            dispatch(updateTodosStatusError(error.message));
        });
}

export const deleteTodo = (id) => (dispatch) => {
    todoApi.deleteTodo(id)
        .then(() => {
            dispatch(deleteTodosSuccess(id));
        })
        .catch(error => {
            dispatch(deleteTodosError(error.message));
        });
}

export const addTodo = (title) => (dispatch) => {
    todoApi.addTodo(title)
        .then(newTodo => {
            console.log(newTodo);
            dispatch(addTodosSuccess(newTodo));
        })
        .catch(error => {
            dispatch(addTodosSuccess(error.message));
        });
}