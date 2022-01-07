import axios from 'axios';

const requestInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/'
});

export default requestInstance;