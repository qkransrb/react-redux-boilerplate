import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../constants/userConstatns";

export const fetchUsersAction = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USERS_REQUEST });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
