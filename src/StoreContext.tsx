import React from 'react';
import {ProviderType, StoreType} from './Types';

/*const initialValue: StoreType = {
    _state:
}*/


const StoreContext = React.createContext({} as StoreType)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext