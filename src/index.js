import './index.css';
import React from 'react';
import App from './app/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

