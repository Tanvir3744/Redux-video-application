import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getTags from "./tagsApi";

const initialState = {
    tags: [],
    isError: false,
    error: '',
    loading:false
}

//creating thunk function 
const fetchTags = createAsyncThunk('tags/fetchTags', async() => {
    const tags = getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.error = '';
            state.loading = false;
            state.isError = false;
        })

        builder.addCase(fetchTags.fulfilled, (state, action) => {
            
        })
    }
});