import { publicRequest } from "../requestMethods";

import { loginFailure, loginStart, loginSucces } from "./userRedux";

export const login = async (dispatch, user, navigate) => {
  console.log("work");
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    await dispatch(loginSucces(res.data));
    //Send userid after login to addproduct function for get product in cart with each userId similar in database
    navigate("/");
    console.log("navigate");
  } catch (err) {
    dispatch(loginFailure());
  }
};
