import { GET_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../action/user";

const initialState = {
    data : {},
    loading : false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return{
                ...state, loading : true
            }
        case GET_USERS_SUCCESS:
            return{
                ...state, data : action.data, loading : false
            }
        case GET_USERS_FAILED:
            return{
                ...state, loading : false
            }
        default:
            return state
    }
    
}