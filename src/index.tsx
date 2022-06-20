import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)