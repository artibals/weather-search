import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

// TODO: investigate how to use root store to avoid importing individual stores.

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