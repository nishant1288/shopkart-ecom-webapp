import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const URL = 'http://localhost:8000';

const initialState = {
    loading: true,
    productDetail : {},
    error: ''
}

export const getProductDetails = createAsyncThunk(`product/getProductDetails`, async(id) => {
    const response = await axios.get(`${URL}/product/${id}`);
    return response.data;
})

const productDetailSlice = createSlice({
    name: 'productDetails',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductDetails.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.productDetail = action.payload;
            state.error = '';
        })
        builder.addCase(getProductDetails.rejected, (state, action) => {
            state.loading = false;
            state.productDetail = {};
            state.error = action.error.message;
        })
    }
})

export default productDetailSlice.reducer;