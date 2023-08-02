// src/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../services/apiConfig';

export const loginUser = createAsyncThunk('api/fetchData', async (body) => {
  try{
    const response = await instance.post('/login',body);
    return response.data;
  }catch(error){
    return error;
  }
});

export const registerUser = createAsyncThunk('api/registerUser', async (body) => {
  const response = await instance.post('/register',body);
  return response.data;
});

const authSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    reg_data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token",action.payload.tokan)
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.reg_data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default authSlice.reducer;
