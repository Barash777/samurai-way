const initialState = {}

export type SidebarInitialStateType = typeof initialState

const sidebarReducer = (state: SidebarInitialStateType = initialState, action: SidebarUnionACType): SidebarInitialStateType => {

    return state
}

export type SidebarUnionACType = {}

export default sidebarReducer;