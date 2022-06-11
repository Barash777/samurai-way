import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import {BrowserRouter} from 'react-router-dom';

import state, {addPost} from './redux/state';

// addPost('From index')
// addPost('From index 2123')

ReactDOM.render(
    <App state={state} addPost={addPost}/>,
    document.getElementById('root')
);