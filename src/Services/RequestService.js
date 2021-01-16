import client from "../Api";
import { AUTH_TYPES } from "../Redux/Types";
import { tokenStore } from "./tokenStore";
import jwt_decode from "jwt-decode";
export const authentication = {
  // register new user
  singIn: (payload) => {
    return async (dispatch) => {
      dispatch({ type: AUTH_TYPES.SIGN_UP_START });
      try {
        const { data } = await client.post("/auths/signin", payload);
        dispatch({ type: AUTH_TYPES.SIGN_UP_SUCCESS, payload: data });
        const token = data.token;
        let decoded = jwt_decode(token);
        tokenStore.storeToken(token);
      } catch ({ response }) {
        dispatch({ type: AUTH_TYPES.SIGN_UP_FAILED, payload: response.data });
        console.log(response.data);
      }
    };
  },

  // register new user
  signUp: (payload) => {
    return async (dispatch) => {
      dispatch({ type: AUTH_TYPES.SIGN_UP_START });
      try {
        const { data } = await client.post("/auths/signup", payload);
        dispatch({ type: AUTH_TYPES.SIGN_UP_SUCCESS, payload: data });
        console.log(data);
      } catch ({ response }) {
        dispatch({ type: AUTH_TYPES.SIGN_UP_FAILED, payload: response.data });
        console.log(response.data);
      }
    };
  },
};
