import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Form from './containers/Form';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

const app = (
    <Provider store={store}>
        <Form />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
