import {
  GET_USERS_ERROR,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
} from "./Users.actionTypes";

const initstate = {
  loading: false,
  error: false,
  data: [],
};
export const usersReducers = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    default:
      return state;
  }
};
