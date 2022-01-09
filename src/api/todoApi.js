import requestInstance from '.';


const getTodos = () => {
    return requestInstance
    .get('?_limit=10')
    .then(todos => todos.data);
}

const updateTodosStatus = (params) => {
    const {id, completed} = params;

    return requestInstance
    .patch(`${id}`, {completed})
    .then(isUpdates => isUpdates.status);
}

const deleteTodo = (id) => {
    return requestInstance
    .delete(`${id}`)
    .then(isDelete => isDelete.status);
}

const addTodo = (title) => {
    return requestInstance
    .post('', {title, userId: 1})
    .then(newTodo => newTodo.data);
}

export const todoApi = { getTodos, updateTodosStatus, deleteTodo, addTodo };