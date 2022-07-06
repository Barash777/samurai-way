import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import store from './redux/store';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import StoreContext from './StoreContext';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

/*export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}*/

rerenderEntireTree()

store.subscribe(rerenderEntireTree)