import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"

//initializing the state
const initialState = {
    videos: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVideo = createAsyncThunk('vidoes/fetchVidoe', async() => {
    const videos = await getVideos();
    return videos;
})

//creating slice 
const vidoesSlice = createSlice({
    name: 'vidoes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        })

        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.vidoes = [];
        })
    }
});

export default vidoesSlice.reducer;