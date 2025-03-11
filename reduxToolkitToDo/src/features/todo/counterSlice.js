import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('counter/fetchData', async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0, status: 'idle'},
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending,(state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value = action.payload.value;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;