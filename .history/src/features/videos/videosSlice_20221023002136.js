import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"


const initialState = {
    videos: [],
    loading: false,
    isError: false, 
    error :''
}

// async thunk
export const fetchVidoesAsync = createAsyncThunk('vidoes/fetchVidoes', async() => {
    const videos = getVideos();
    return videos;
})

const vidoesSlice = createSlice({
    name: 'vidoes',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVidoesAsync.pending, (state) => {
            state.loading = true;
            state.isError = false;
        })

        builder.addCase(fetchVidoesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.vidoes = action.payload;
        })

        builder.addCase(fetchVidoesAsync.rejected, (state, action) => {
            state.loading = false;
            state.isError = true;
            state.error = action.error.message;
            state.vidoes = [];
        })
    }
});