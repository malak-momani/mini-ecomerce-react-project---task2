import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsApi from "../../api/productsApi";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await productsApi.fetchProducts();
            return data;
        } catch (err) {
            return rejectWithValue(err.message || 'Failed to fetch products');
        }
    }
)

export const fetchProductById = createAsyncThunk('products/fetchProductById',
    async (id, { rejectWithValue }) => {
        try {
            const data = await productsApi.fetchProductById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to fetch product');
        }
    }

)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
        error: null,
        currentProduct: null,
        currentStatus: 'idle',
        currentError: ''
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.currentStatus = 'loading';
                state.currentError = null;
                state.currentProduct = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.currentStatus = 'success';
                state.currentProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.currentStatus = 'failed';
                state.currentError = action.payload || action.error.message;
            })
    }
})

export default productsSlice.reducer;