import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'http://localhost:8000';

const initialState = {
    loading: false,
    products: [],
    error: ''
}

// export const fetchProducts = createAsyncThunk(`product/fetchProducts`, () => {
//     return axios.get(`${URL}/products`)
//     .then((response) => response.data)
// })

export const fetchProducts = createAsyncThunk(`product/fetchProducts`, async () => {
    const response = await axios.get(`${URL}/products`);
    return response.data;
})


const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;

