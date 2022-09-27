import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
};

export const getOrders = createAsyncThunk("/allOrders", async () => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get("/api/users/order-history", {
      headers: { authorization: token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export default ordersSlice.reducer;
