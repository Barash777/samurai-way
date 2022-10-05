import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import store from './redux/redux-store';
// import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {DevSupport} from '@react-buddy/ide-toolbox';
import {ComponentPreviews, useInitial} from './dev';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);