import {UserAction, UserActionTypes, UserState} from "../../types/user";


const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    isAuth: false,
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, isAuth:false, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, isAuth:true, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, isAuth:true, error: action.payload, users: []}
        default:
            return state
    }
}