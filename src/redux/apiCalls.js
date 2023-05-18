import { useDispatch } from "react-redux";
import { adminRequest, publicRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProduct,
  updateProductSuccess,
} from "./productSlice";
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

export const addProduct = async (dispatch, product) => {
  console.log(product, "work");
  // dispatch(addProductStart());
  try {
    const res = await adminRequest.post("products/", product);
    await dispatch(addProductSuccess(res.data));
    console.log("ok");
  } catch (err) {
    console.log("not ok", err);
    dispatch(addProductFailure());
  }
};

export const updateProduct = async (dispatch, idProduct, product) => {
  console.log(product, "work");
  // dispatch(addProductStart());
  try {
    const res = await adminRequest.put(`products/${idProduct}`, product);
    await dispatch(updateProductSuccess(res.data));

    console.log("🚀 ~ file: apiCalls.js:45 ~ updateProduct ~ res:", res.data);
    console.log("ok");
  } catch (err) {
    console.log("not ok", err);
    dispatch(addProductFailure());
  }
};

export const removeProduct = async (dispatch, idProduct) => {
  try {
    await adminRequest.delete(`products/${idProduct}`);
    console.log(idProduct);
    await dispatch(deleteProduct(idProduct));
  } catch (err) {
    console.log("err delete product", err);
  }
};
