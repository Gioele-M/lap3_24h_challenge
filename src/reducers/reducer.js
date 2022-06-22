
const initialState = {
    username: ''
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "USERNAME":
            return {...state, artist: action.payload}
            break;
    
        default:
            return initialState
            break;
    }

}


export default reducer
