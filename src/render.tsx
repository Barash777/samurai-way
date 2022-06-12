import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {StateType} from './Types';

export const rerenderEntireTree = (appState: StateType,
                                   addPost: () => void,
                                   updateNewPostText: (text: string) => void) => {
    ReactDOM.render(
        <App
            state={appState}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}
