import { GET_USERS } from "./users.actions.types";

const initstate = {
  data: [],
};
export const usersReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_USERS: {
      return {
        ...state,
        data: payload,
      };
    }

    default:
      return state;
  }
};
