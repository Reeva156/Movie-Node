import {
  LOGIN_SUCCESS,
  LOGOUT
} from "../../Utilis/constants.js";

export const login =
  (email, password) => async (dispatch) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = {
      name: email.split("@")[0],
      email
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");

  dispatch({
    type: LOGOUT
  });
};