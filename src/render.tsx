import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {StateType} from './Types';

export const rerenderEntireTree = (appState: StateType, addPost: (m: string) => void) => {
    ReactDOM.render(
        <App state={appState} addPost={addPost}/>,
        document.getElementById('root')
    );
}
