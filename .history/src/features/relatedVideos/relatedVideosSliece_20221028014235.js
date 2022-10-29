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
export const fetchRelatedVideo = createAsyncThunk('vidoes/fetchVidoes', async() => {
    const relatedVideos = await getRelatedVideo();
    return relatedVideos;
})

//creating slice 
const relatedVideoSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideo.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchRelatedVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.relatedVideos = action.payload;
        })

        builder.addCase(fetchRelatedVideo.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.relatedVideos = [];
        })
    }
});

export default relatedVideoSlice.reducer;