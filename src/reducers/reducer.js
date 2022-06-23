
const initialState = {
    username: '',
    userinfo: {
        login: '',
        name: '',
        publicRepos: '',
        followers: '',
        following: ''
    }
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "USERNAME":
            return { ...state, username: action.payload }
        case "USERINFO":
            return {
                ...state, userinfo: {
                    ...state.userinfo,
                    ...action.payload
                }
            }
        default:
            return initialState
    }

}


export default reducer
