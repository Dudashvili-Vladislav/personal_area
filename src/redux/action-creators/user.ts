import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import $api from "../../api";


export const fetchUsers = ():any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await $api.get('/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload:response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'User loading error'
            })
        }
    }
}