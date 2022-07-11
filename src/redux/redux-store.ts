import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
// import {StoreType} from '../Types';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store

const store = createStore(rootReducer)
// let store: StoreType = legacy_createStore(reducers)

export default store;