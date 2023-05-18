import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminRequest, publicRequest } from "../requestMethods";

const productSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle", // idle => free
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //ADD PRODUCT
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      const getProduct = action.payload;
      state.products.push(getProduct);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE PRODUCT
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
    //DELETE PRODUCT
    deleteProduct: (state, action) => {
      const id = action.payload;
      const newProducts = state.products.filter(
        (product) => product._id !== id
      );
      console.log(newProducts);
      state.products = newProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "loading"; //Update status
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "idle"; //Update status
        state.products = action.payload; //Update products
      });
  },
});

//Thunk function
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await publicRequest.get("products/");
    console.log(res.data);
    return res.data;
  }
);

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  updateProductSuccess,
  deleteProduct,
} = productSlice.actions;
export default productSlice.reducer;
