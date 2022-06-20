import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import store from './redux/state';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)