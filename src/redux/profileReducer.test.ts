import profileReducer, {
    addPostAC, deletePostAC,
    PostType,
    ProfileInitialStateType,
    ProfileType,
    setProfileStatusAC
} from './profileReducer';

let startState: ProfileInitialStateType,
    endState: ProfileInitialStateType;

beforeEach(() => {
    startState = {
        posts: [
            {
                id: 1,
                message: 'Hello',
                likeCount: 12
            },
            {
                id: 2,
                message: 'Wow',
                likeCount: 25
            },
            {
                id: 3,
                message: 'OK',
                likeCount: 37
            },
            {
                id: 4,
                message: 'From state',
                likeCount: 101
            }
        ] as Array<PostType>,
        profile: {} as ProfileType,
        status: ''
    }
})

test('new post should be added', () => {
    const text = 'HAHAHA'
    const action = addPostAC(text)
    endState = profileReducer(startState, action)

    expect(startState.posts.length).toBe(4)
    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe(text)
    expect(endState.posts[4].likeCount).toBe(0)
})

test('set profile status', () => {
    const status = 'hey'
    const action = setProfileStatusAC(status)
    endState = profileReducer(startState, action)

    expect(startState.status).toBe('')
    expect(endState.status).toBe(status)
})

test('delete post', () => {
    const id = 1
    const action = deletePostAC(id)
    endState = profileReducer(startState, action)

    expect(startState.posts.length).toBe(4)
    expect(endState.posts.length).toBe(3)
})