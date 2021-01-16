import { AUTH_TYPES } from "../Types";

const initialState = {
  signInStart: false,
  isAuthenticated: false,
  signInFail: false,

  signUpStart: false,
  signUpSuccess: false,
  signUpFail: false,

  logOutStart: false,
  logOutSuccess: false,
  logOutFail: false,

  error: {},
};

const RX_AUTH = (state = initialState, { type, payload }) => {
  switch (type) {
    //Sign In
    case AUTH_TYPES.SIGN_IN_START:
      return {
        ...state,
        signInStart: true,
        isAuthenticated: false,
        signInFail: false,
      };
    case AUTH_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInStart: false,
        isAuthenticated: true,
        signInFail: false,
      };
    case AUTH_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        signInStart: false,
        isAuthenticated: false,
        signInFail: true,
        error: payload,
      };
    //Sign Up
    case AUTH_TYPES.SIGN_UP_START:
      return { ...state, ...payload };
    case AUTH_TYPES.SIGN_UP_SUCCESS:
      return { ...state, ...payload };
    case AUTH_TYPES.SIGN_UP_FAILED:
      return { ...state, ...payload };

    //Log Out
    case AUTH_TYPES.LOG_OUT_START:
      return { ...state, ...payload };
    case AUTH_TYPES.LOG_OUT_SUCCESS:
      return { ...state, ...payload };
    case AUTH_TYPES.LOG_OUT_FAILED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default RX_AUTH;
