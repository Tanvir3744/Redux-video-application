import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {getTags} from "./tagsApi";

const initialState = {
    tags: [],
    isError: false,
    error: '',
    loading:false
}

//creating thunk function 
const fetchTags = createAsyncThunk('tags/fetchTags', async() => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.loading = false;
            state.isError = false;
        })

        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = action.payload;
            state.loading = false;
        })

        builder.addCase(fetchTags.rejected, (state, action) => {
            state.error = action.error?.message;
            state.tags = [];
            state.isError = true;
            state.loading = true;
        })
    }
});

export default tagsSlice.reducer;