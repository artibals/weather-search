import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

import App from './components/App.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

// TODO: investigate how to use root store to avoid importing individual stores.

// https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/#:~:text=2.%20Avoiding%20manual%20subscription%20to%20the%20Redux%20store

// https://react-redux.js.org/using-react-redux/connect-mapstate
// https://react-redux.js.org/using-react-redux/connect-mapdispatch


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);