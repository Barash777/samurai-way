import React from 'react';
import {AppStoreType} from './redux/redux-store';

/*const initialValue: StoreType = {
    _state:
}*/


export type ProviderType = {
    store: AppStoreType
    children: React.ReactNode
}


const StoreContext = React.createContext({})


export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}


export default StoreContext