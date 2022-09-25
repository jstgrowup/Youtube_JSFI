import { GET_USERS } from "./users.actions.types";
import axios from "axios"
export const getusers = () => async (dispatcher) => {
  try {
    let res = await axios.get("http://localhost:8080/");
    dispatcher({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
