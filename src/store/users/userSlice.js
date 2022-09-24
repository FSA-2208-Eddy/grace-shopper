import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
axios.defaults.headers.common["authorization"] =
  window.localStorage.getItem("token");

export const getUsers = createAsyncThunk("/allUsers", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const getSingleUser = createAsyncThunk("/singleUser", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/single`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createUser = createAsyncThunk("/createUser", async (userObj) => {
  try {
    const { data } = await axios.post("/api/users", userObj);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const updateUser = createAsyncThunk(
  "/updateUser",
  async (updatedUserObject) => {
    try {
      const { id } = updatedUserObject;
      const { data } = await axios.put(`/api/users/${id}`, updatedUserObject);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteUser = createAsyncThunk("/deleteUser", async (id) => {
  try {
    const { data } = await axios.delete(`/api/admin/delete-user/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      return action.payload;
    },
    [createUser.fulfilled]: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    [updateUser.fulfilled]: (state, action) => {
      let obj = state.users.find((user) => user.id === action.payload.id);

      for (let key in action.payload) {
        if (action.payload[key] && typeof action.payload[key] !== BOOLEAN) {
          obj[key] = action.payload[key];
        }
      }
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.users = [...state.users].filter(
        (user) => user.id !== action.payload.id
      );
    },
  },
});

export default userSlice.reducer;
