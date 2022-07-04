import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import {StoreType} from '../Types';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store: StoreType = createStore(reducers)
// let store: StoreType = legacy_createStore(reducers)

export default store;