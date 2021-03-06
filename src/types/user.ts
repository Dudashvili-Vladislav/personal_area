export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  FETCH_USERS_AUTH = "FETCH_USERS_AUTH",
  FETCH_CREATE_USER = "FETCH_CREATE_USER",
  FETCH_UPDATE_USER = "FETCH_UPDATE_USER",
  FETCH_DELETE_USER = "FETCH_DELETE_USER",
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface FetchCreateUserAction {
  type: UserActionTypes.FETCH_CREATE_USER;
  payload: IUser;
}

interface FetchUpdateUserAction {
  type: UserActionTypes.FETCH_UPDATE_USER;
  payload: IUser;
}

interface FetchDeleteUserAction {
  type: UserActionTypes.FETCH_DELETE_USER;
  payload: IUser;
}

interface FetchUsersAuthAction {
  type: UserActionTypes.FETCH_USERS_AUTH;
  payload: boolean;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | FetchUsersAuthAction
  | FetchCreateUserAction
  | FetchUpdateUserAction
  | FetchDeleteUserAction;

export interface IUser {
  id: number;
  name: string;
  login: string;
  comment: string;
  created_at: string;
  updated_at: null | string;
  password: number;
}

export interface IUpdate {
  id: number;
  name: string;
  login: string;
  comment: string;
  password: string;
}

export interface ICreate {
  name: string;
  login: string;
  comment: string;
  password: string;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
  isAuth: boolean;
}

export interface IAuthorization {
  login: string;
  password: string;
}

export interface IRegistration extends IAuthorization {
  name: string;
  comment: string;
}
