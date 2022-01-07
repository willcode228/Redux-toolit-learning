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
    .then(response => response.status);
}

const deleteTodo = (id) => {
    return requestInstance
    .delete(`${id}`)
    .then(response => response.status);
}

export const todoApi = { getTodos, updateTodosStatus, deleteTodo };