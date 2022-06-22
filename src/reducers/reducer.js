
const initialState = {
    username: ''
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "USERNAME":
            return { ...state, username: action.payload }
        default:
            return initialState
    }

}


export default reducer
