// import {
//   GET_USERS_SUCCESS,
//   GET_USERS_LOADING,
//   GET_USERS_ERROR,
// } from "./Users.actionTypes";
// import axios from "axios";
// export const getusers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS_LOADING });
//   try {
//     let res = await axios.get("http://localhost:8080");

//     dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
//     return res.data;
//   } catch (error) {
//     dispatch({ type: GET_USERS_ERROR });
//   }
// };
