import {
  LOGIN_SUCCESS,
  LOGOUT
} from "../../Utilis/constants.js";

const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!storedUser
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };

    case LOGOUT:
      localStorage.removeItem("user");

      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default authReducer;