import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoApi"

//initializing the state
const initialState = {
    video: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVideo = createAsyncThunk('vidoes/fetchVidoe', async() => {
    const videos = await getVideo();
    return videos;
})

//creating slice 
const videoSlice = createSlice({
    name: 'vidoe',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.video= action.payload;
        })

        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.video = [];
        })
    }
});

export default videoSlice.reducer;