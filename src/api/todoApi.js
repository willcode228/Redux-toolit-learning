import requestInstance from '.';

const getTodos = () => {
    return requestInstance
    .get('?_limit=10')
    .then(todos => todos);
}

const updateTodosStatus = (params) => {
    const {id, completed} = params;

    return requestInstance
    .patch(`${id}`, {completed})
    .then(response => response);
}

const deleteTodo = (id) => {
    return requestInstance
    .delete(`${id}`)
    .then(response => response);
}

const addTodos = (params) => {
    return requestInstance
    .post('', params)
    .then(response => response);
}

export const todoApi = { getTodos, updateTodosStatus, deleteTodo, addTodos };