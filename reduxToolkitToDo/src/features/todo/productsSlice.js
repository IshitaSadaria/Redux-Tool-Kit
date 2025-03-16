import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: "idle",
    error: null
};

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok) throw new Error("Network response was not ok");
        return response.json();
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loadiing';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;