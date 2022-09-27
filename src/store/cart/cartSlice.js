import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: {
    lineitems: [],
  },
};

export const getCart = createAsyncThunk("/getCart", async () => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get("/api/users/cart", {
      headers: { authorization: token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const removeItemFromCart = createAsyncThunk(
  "/removeFromCart",
  async (lineItemId) => {
    try {
      const token = window.localStorage.getItem("token");
      // console.log("token is this", token)
      const { data } = await axios.put(
        "/api/users/cart-remove",
        {
          lineItemId: lineItemId,
        },
        { headers: { authorization: token } }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const checkoutCart = createAsyncThunk("/checkoutCart", async () => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.put(
      "/api/users/checkout",
      {},
      { headers: { authorization: token } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [removeItemFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [checkoutCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;
