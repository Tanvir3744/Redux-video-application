import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideo } from "./relatedVideosApi"

//initializing the state
const initialState = {
    relatedVideos: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchRelatedVideos = createAsyncThunk('vidoes/fetchVidoes', async({tags, id}) => {
    const relatedVideos = await getRelatedVideo({tags, id});
    return relatedVideos;
})

//creating slice 
const relatedVideoSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.relatedVideos = action.payload;
        })

        builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.relatedVideos = [];
        })
    }
});

export default relatedVideoSlice.reducer;