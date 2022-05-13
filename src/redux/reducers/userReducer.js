import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../constants/userConstatns";

const fetchUserInitialState = {
  loading: false,
  error: false,
  message: null,
  users: [],
};

export const fetchUserReducer = (state = fetchUserInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: null,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
        users: [],
      };
    default:
      return state;
  }
};
