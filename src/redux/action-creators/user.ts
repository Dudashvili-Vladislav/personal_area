import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import User from "../../services/User";
import { IUpdate } from "../../types/user";
import { ICreate } from "../../types/user";


export const fetchAuth = (value: boolean): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS_AUTH, payload: value });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error authorization",
      });
    }
  };
};

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await User.fetchUsers();
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "User loading error",
      });
    }
  };
};

export const fetchCreateUser = (user: ICreate): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await User.fetchCreateUser(user);
      dispatch({
        type: UserActionTypes.FETCH_CREATE_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error creating user",
      });
    }
  };
};

export const fetchUpdateUser = (user: IUpdate): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await User.fetchUpdateUser(user);
      dispatch({
        type: UserActionTypes.FETCH_UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error when changing user",
      });
    }
  };
};

export const fetchDeleteUser = (id: number): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await User.fetchDeleteUser(id);
      dispatch({
        type: UserActionTypes.FETCH_DELETE_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Error when deleting a user",
      });
    }
  };
};
