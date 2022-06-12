import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import {BrowserRouter} from 'react-router-dom';

// import state, {addPost} from './redux/state';
import state, {addPost, updateNewPostText} from './redux/state';
import {rerenderEntireTree} from './render';
// import {rerenderEntireTree} from './render';

// addPost('From index')
// addPost('From index 2123')

/*export const rerenderEntireTree = (appState: StateType, addPost: any) => {
    ReactDOM.render(
        <App state={appState} addPost={addPost}/>,
        document.getElementById('root')
    );
}*/

rerenderEntireTree(state, addPost, updateNewPostText)