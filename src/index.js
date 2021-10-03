import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

// TODO: investigate how to use root store to avoid importing individual stores.

// https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/#:~:text=2.%20Avoiding%20manual%20subscription%20to%20the%20Redux%20store

// https://react-redux.js.org/using-react-redux/connect-mapstate
// https://react-redux.js.org/using-react-redux/connect-mapdispatch

// import { Provider } from 'react-redux';
// ...
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);