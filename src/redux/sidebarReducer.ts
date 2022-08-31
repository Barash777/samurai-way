const initialState = {}

export type SidebarInitialStateType = typeof initialState

const sidebarReducer = (state: SidebarInitialStateType = initialState, action: SidebarUnionACType): SidebarInitialStateType => {

    return state
}

export type SidebarUnionACType = TestType

export type TestType = { type: 'SIDEBAR/TEST' }

export default sidebarReducer;