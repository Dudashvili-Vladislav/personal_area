import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  isAuth: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_AUTH:
      return { ...state, loading: false, error: null, isAuth: action.payload };
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UserActionTypes.FETCH_CREATE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users, action.payload],
      };
    case UserActionTypes.FETCH_UPDATE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        users: [
          ...state.users.filter((el) => el.id !== action.payload.id),
          action.payload,
        ],
      };
    case UserActionTypes.FETCH_DELETE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users.filter((el) => el.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
