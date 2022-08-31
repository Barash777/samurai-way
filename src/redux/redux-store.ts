import {applyMiddleware, combineReducers, legacy_createStore as createStore, AnyAction} from 'redux';
import profileReducer, {ProfileUnionACType} from './profileReducer';
import dialogsReducer, {DialogsUnionACType} from './dialogsReducer';
import sidebarReducer, {SidebarUnionACType} from './sidebarReducer';
import usersReducer, {UsersUnionACType} from './usersReducer';
import authReducer, {AuthUnionACType} from './authReducer';
import thunk from 'redux-thunk'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store
export type AppActionsType =
    ProfileUnionACType |
    DialogsUnionACType |
    UsersUnionACType |
    SidebarUnionACType |
    AuthUnionACType


const store = createStore(rootReducer, applyMiddleware(thunk))
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store;