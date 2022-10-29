import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoApi"

//initializing the state
const initialState = {
    video: {}, //while we are going to push a single video into the state we should put it an object instance...
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVideo = createAsyncThunk('vidoes/fetchVideo', async(id) => {
    const videos = await getVideo(id);
    return videos;
})

//creating slice 
const videoSlice = createSlice({
    name: 'video',
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